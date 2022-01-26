const express = require('express');
const payslipsController = require('../controllers/payslipsController');

const router = express.Router();

router.route('/:monthYear').get(payslipsController.getAllSlipInfo);

module.exports = router;
