const express = require('express');
const employeesController = require('../controllers/employeesController');

const router = express.Router();
router.param('id', employeesController.checkID);

router
  .route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.checkBody, employeesController.createEmployee);

router
  .route('/:id')
  .get(employeesController.getEmployeeById)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router
  .route('/search/:fullName')
  .get(employeesController.getEmployeeByFullName);

module.exports = router;
