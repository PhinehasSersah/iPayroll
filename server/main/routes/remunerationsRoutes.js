const express = require('express');
const remunerationsController = require('../controllers/remunerationsController');

const router = express.Router();
router.param('id', remunerationsController.checkID);

router.route('/').post(remunerationsController.createEmpMonthRemueration);

router
  .route('/:id/:monthYear')
  .get(remunerationsController.getEmpMonthRemueration);
module.exports = router;
