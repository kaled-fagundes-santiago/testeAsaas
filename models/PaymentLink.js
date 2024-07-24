const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const PaymentLink = sequelize.define('PaymentLink', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.FLOAT
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    chargeType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING
    },
    billingType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subscriptionCycle: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    endDate: {
        type: DataTypes.DATE
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    viewCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    maxInstallmentCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    dueDateLimitDays: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    notificationEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'payment_links',
    timestamps: true
});

module.exports = PaymentLink;
