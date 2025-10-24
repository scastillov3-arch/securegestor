module.exports = (sequelize, DataTypes) => {
    const Gestion = sequelize.define('Gestion', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        content_encrypted: { type: DataTypes.TEXT, allowNull: false },
        status: { type: DataTypes.STRING, defaultValue: 'pending' } // pending | approved | rejected
    }, {
        tableName: 'gestiones',
        timestamps: true
    });

    return Gestion;
};
