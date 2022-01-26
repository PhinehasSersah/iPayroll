const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator');

exports.authorization = (req, res, next) => {
  try {
    const jwtToken = req.headers['token'];

    if (!jwtToken) {
      return res.status(403).json('Not Authorized');
    }
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json('Not Authorized');
  }
  next();
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM ipr_users WHERE email=$1', [
      email,
    ]);

    if (user.rowCount < 1) {
      return res.status(401).json('Email or password is incorrect');
    }

    const isValidPassword = await bcrypt.compare(
      password,
      user.rows[0].upassword
    );

    if (!isValidPassword) {
      return res.status(401).json('Email or password is incorrect');
    }

    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.log('.env problems');
    console.error(err.message);
    res.status(500).json('Server Error');
  }
};

exports.isVerified = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
