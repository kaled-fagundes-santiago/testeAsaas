const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Callback = sequelize.define('Callback', {
    successUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autoRedirect: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'callbacks',
    timestamps: false
});

module.exports = Callback;
