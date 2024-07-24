const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Payment = sequelize.define('Payment', {
    object: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCreated: {
        type: DataTypes.DATE,
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
        type: DataTypes.DATE,
        allowNull: false
    },
    originalDueDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    netValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    originalValue: {
        type: DataTypes.FLOAT
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    externalReference: {
        type: DataTypes.STRING,
        allowNull: false
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
        type: DataTypes.DATE
    },
    paymentDate: {
        type: DataTypes.DATE
    },
    clientPaymentDate: {
        type: DataTypes.DATE
    },
    installmentNumber: {
        type: DataTypes.STRING
    },
    creditDate: {
        type: DataTypes.DATE
    },
    custody: {
        type: DataTypes.STRING
    },
    estimatedCreditDate: {
        type: DataTypes.DATE
    },
    invoiceUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bankSlipUrl: {
        type: DataTypes.STRING
    },
    transactionReceiptUrl: {
        type: DataTypes.STRING
    },
    invoiceNumber: {
        type: DataTypes.STRING,
        allowNull: false
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
        type: DataTypes.DATE
    },
    lastBankSlipViewedDate: {
        type: DataTypes.DATE
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
