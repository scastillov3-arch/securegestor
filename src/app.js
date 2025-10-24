require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const gestionesRoutes = require('./routes/gestiones');

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/gestiones', gestionesRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
async function start() {
    try {
        await sequelize.authenticate();
        console.log('DB connected');
        // await sequelize.sync({ force: false }); // usar migraciones en proyecto real
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
    } catch (err) {
        console.error('Unable to start app', err);
        process.exit(1);
    }
}

start();

module.exports = app;
