const express = require('express');
const payslipsController = require('../controllers/payslipsController');

const router = express.Router();

router.route('/:monthYear').get(payslipsController.getAllMonthSlipInfo);
router
  .route('/send-slip')
  .post(payslipsController.createPDF, payslipsController.sendPDDF);

module.exports = router;
