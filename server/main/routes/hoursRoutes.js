const express = require('express');
const hoursController = require('../controllers/hoursController');

const router = express.Router();
router.param('id', hoursController.checkID);

router
  .route('/')
  .get(hoursController.getAllHours)
  .post(hoursController.checkBody, hoursController.createEmployeeHours);

router
  .route('/:id')
  .get(hoursController.getEmployeeHours)
  .put(hoursController.updateHours);

router
  .route('/:id/:date')
  .put(hoursController.updateHours)
  .delete(hoursController.deleteHours);

module.exports = router;
