const express = require('express');
const ratesController = require('../controllers/ratesController');

const router = express.Router();
router.param('id', ratesController.checkID);

router
  .route('/')
  .get(ratesController.getAllRates)
  .post(ratesController.checkBody, ratesController.createRate);

router
  .route('/:id')
  .get(ratesController.getRate)
  .put(ratesController.updateRate)
  .delete(ratesController.deleteRate);

module.exports = router;
