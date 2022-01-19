const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const hrRouter = require('./routes/hrRoutes');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', hrRouter);

app.get('/ipayroll/api/v1/departments', async (req, res) => {
  try {
    const departments = await pool.query('SELECT * FROM departments');
    res.status(200).json(departments.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = app;
