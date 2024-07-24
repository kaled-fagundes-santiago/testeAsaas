const express = require('express');
const messageController = require('../controllers/messageController');


const router = express.Router();

router.post('/payments-webhook', messageController.sendMessage);
router.post('/paymentLink', messageController.createPaymentLinks);

module.exports = router;
