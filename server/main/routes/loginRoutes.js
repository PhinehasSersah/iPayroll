const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.route('/').post(loginController.login);
router
  .route('/is-verified')
  .get(loginController.authorization, loginController.isVerified);

module.exports = router;
