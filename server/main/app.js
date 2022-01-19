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

app.get('/ipayroll/api/v1/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const department = await pool.query(
      'SELECT * FROM departments WHERE id=$1',
      [id]
    );
    if (department.rowCount < 1) {
      return res.status(404).json({ message: 'Invalid id' });
    }
    res.json(department.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/ipayroll/api/v1/departments', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.json({ message: 'No department to add' });
    }
    const newDept = await pool.query(
      'INSERT INTO departments (name) VALUES($1) RETURNING *',
      [name]
    );
    res.status(201).json(newDept.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = app;
