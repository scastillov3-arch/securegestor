const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'securegestor',
  process.env.DB_USER || 'securegestor_user',
  process.env.DB_PASS || 'changeme',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false,
  }
);

const User = require('./user')(sequelize, DataTypes);
const Gestion = require('./gestion')(sequelize, DataTypes);

// Associations
User.hasMany(Gestion, { foreignKey: 'userId' });
Gestion.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Gestion };
