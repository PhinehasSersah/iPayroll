const express = require('express');
const app = express();

const router = express.Router();

router.get('/home', (req, res) => {
  res.json(
    'Hello Hello Phine 1 on the Front-end, Danny on the backend says HI'
  );
});

module.exports = router;
