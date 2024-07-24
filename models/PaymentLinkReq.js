class PaymentLink {
    constructor({
        id,
        name,
        description = null,
        endDate = null,
        value = null,
        billingType,
        chargeType,
        dueDateLimitDays = 0,
        subscriptionCycle = null,
        maxInstallmentCount = 1,
        notificationEnabled = true,
        callbackId = null,
        status = null
    }) {
        this.id = id;  // Identificador único
        this.name = name;  // Nome do link de pagamento
        this.description = description;  // Descrição do link de pagamento
        this.endDate = endDate;  // Data de encerramento
        this.value = value;  // Valor do link de pagamento
        this.billingType = billingType;  // Forma de pagamento permitida
        this.chargeType = chargeType;  // Forma de cobrança
        this.dueDateLimitDays = dueDateLimitDays;  // Dias após geração do boleto
        this.subscriptionCycle = subscriptionCycle;  // Periodicidade da cobrança
        this.maxInstallmentCount = maxInstallmentCount;  // Máximo de parcelas
        this.notificationEnabled = notificationEnabled;  // Notificações habilitadas
        this.callbackId = callbackId;  // Referência ao objeto Callback
        this.status = status;  // Status do link de pagamento
    }
}

module.exports = PaymentLink;
