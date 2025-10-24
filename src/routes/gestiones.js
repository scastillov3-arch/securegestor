const express = require('express');
const router = express.Router();
const Joi = require('joi');
const CryptoJS = require('crypto-js');
const { Gestion, User } = require('../models');
const { authenticate, authorizeRole } = require('../middleware/auth');

const gestionSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(1).required()
});

function encrypt(text) {
    const secret = process.env.JWT_SECRET || 'devsecret';
    return CryptoJS.AES.encrypt(text, secret).toString();
}
function decrypt(cipher) {
    const secret = process.env.JWT_SECRET || 'devsecret';
    const bytes = CryptoJS.AES.decrypt(cipher, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
}

router.post('/', authenticate, async (req, res) => {
    const { error, value } = gestionSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    try {
        const encrypted = encrypt(value.content);
        const g = await Gestion.create({ title: value.title, content_encrypted: encrypted, userId: req.user.id });
        res.status(201).json({ id: g.id, title: g.title, status: g.status });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear gestión' });
    }
});

router.get('/', authenticate, async (req, res) => {
    const list = await Gestion.findAll({ where: { userId: req.user.id } });
    const result = list.map(g => ({ id: g.id, title: g.title, content: decrypt(g.content_encrypted), status: g.status }));
    res.json(result);
});

// Admin: get all
router.get('/admin', authenticate, authorizeRole('admin'), async (req, res) => {
    const list = await Gestion.findAll({ include: [{ model: User, attributes: ['id', 'username'] }] });
    const result = list.map(g => ({ id: g.id, title: g.title, content: decrypt(g.content_encrypted), status: g.status, user: g.User }));
    res.json(result);
});

// Update status (admin)
router.patch('/:id', authenticate, authorizeRole('admin'), async (req, res) => {
    const { status } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) return res.status(400).json({ error: 'Estado inválido' });
    const g = await Gestion.findByPk(req.params.id);
    if (!g) return res.status(404).json({ error: 'No encontrado' });
    g.status = status;
    await g.save();
    res.json({ id: g.id, status: g.status });
});

module.exports = router;
