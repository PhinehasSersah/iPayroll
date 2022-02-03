const express = require("express");
const loansController = require("../controllers/loansController");

const router = express.Router();
router.param("id", loansController.checkID);

router
  .route("/")
  .get(loansController.getAllLoans)
  .post(loansController.checkBody, loansController.createLoan);

router.route("/:id").put(loansController.updateLoan);

router.route("/:id").post(loansController.getSingleEmployeeLoan);

module.exports = router;
