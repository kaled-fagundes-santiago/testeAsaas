const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');
const Payment = require('./Payment');  // Ajuste o caminho conforme necessário

const WebhookEventPayment = sequelize.define('WebhookEventPayment', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    event: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false
    },
    paymentId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Payment,
            key: 'id'
        }
    }
}, {
    tableName: 'webhook_event_payments',
    timestamps: true
});

module.exports = WebhookEventPayment;
