const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ error: 'Token requerido' });

    const token = auth.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET || 'devsecret');
        req.user = payload;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}

function authorizeRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) return res.status(403).json({ error: 'Acceso denegado' });
        next();
    };
}

module.exports = { authenticate, authorizeRole };
