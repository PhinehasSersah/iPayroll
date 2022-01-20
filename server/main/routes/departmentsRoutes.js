const express = require('express');
const deptsController = require('../controllers/departmentsController');

const router = express.Router();
router.param('id', deptsController.checkID);

router
  .route('/')
  .get(deptsController.getAllDepartments)
  .post(deptsController.checkBody, deptsController.createDepartment);

router
  .route('/:id')
  .get(deptsController.getDepartment)
  .put(deptsController.updateDepartment)
  .delete(deptsController.deleteDepartment);

module.exports = router;
