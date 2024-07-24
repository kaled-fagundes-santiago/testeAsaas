const axios = require('axios');
const payment = require('../models/Payment');
const paymentLink = require('../models/PaymentLink');
const paymentLinkReq = require('../models/PaymentLinkReq');

const webhook = require('../models/WebhookEventPayment');
const config = require('../config');

class MessageController {
    async sendMessage(req, res) {
        const body = req.body;
        const paymentRec = body.payment;
        paymentRec = payment.create(paymentRec);
        const webhookEvent = {
            id: body.id,
            event: body.event,
            dateCreated: new Date(),
            paymentId: paymentRec.id
        };
        webhook.create(webhookEvent);
        
        // Retorne uma resposta para dizer que o webhook foi recebido
        res.json({received: true});
    }
  
    async createPaymentLinks(req, res) {

        const paymentLinkReqEnvio = req.body;

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              access_token: config.access_token,
              'User-Agent': config.User_Agent
            },
            body: JSON.stringify({
                billingType: 'CREDIT_CARD',
                chargeType: 'RECURRENT',
                callback: {successUrl: 'https://neilpatel.com/br/blog/melhores-designs-de-homepage/'},
                name: 'teste123'
              })
        };
          
           fetch('https://sandbox.asaas.com/api/v3/paymentLinks', options)
            .then(response => response.json())
            .then(response => paymentLink.create(response))
            .catch(err => console.error(err));
        res.json({received: true });
    }
}

module.exports = new MessageController();
