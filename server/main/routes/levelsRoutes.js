const express = require('express');
const levelsController = require('../controllers/levelsController');

const router = express.Router();
router.param('id', levelsController.checkID);

router
  .route('/')
  .get(levelsController.getAllLevels)
  .post(levelsController.checkBody, levelsController.createLevel);

router
  .route('/:id')
  .get(levelsController.getLevel)
  .put(levelsController.updateLevel)
  .delete(levelsController.deleteLevel);

module.exports = router;
