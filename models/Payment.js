const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');
const { v4: uuidv4 } = require('uuid');  // Importa a biblioteca uuid

const Payment = sequelize.define('Payment', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: uuidv4, // Gera um UUID automaticamente
        primaryKey: true
    },
    object: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCreated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paymentLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    originalDueDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    netValue: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    originalValue: {
        type: DataTypes.FLOAT
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    externalReference: {
        type: DataTypes.STRING,
        allowNull: true
    },
    billingType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pixTransaction: {
        type: DataTypes.STRING
    },
    confirmedDate: {
        type: DataTypes.STRING,
    },
    paymentDate: {
        type: DataTypes.STRING,
    },
    clientPaymentDate: {
        type: DataTypes.STRING,
    },
    installmentNumber: {
        type: DataTypes.STRING
    },
    creditDate: {
        type: DataTypes.STRING,
    },
    custody: {
        type: DataTypes.STRING
    },
    estimatedCreditDate: {
        type: DataTypes.STRING,
    },
    invoiceUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bankSlipUrl: {
        type: DataTypes.STRING
    },
    transactionReceiptUrl: {
        type: DataTypes.STRING
    },
    invoiceNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    anticipated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    anticipable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    lastInvoiceViewedDate: {
        type: DataTypes.STRING,
    },
    lastBankSlipViewedDate: {
        type: DataTypes.STRING,
    },
    postalService: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'payments',
    timestamps: true
});

module.exports = Payment;
