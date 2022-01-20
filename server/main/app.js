const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const deptsRouter = require('./routes/departmentsRoutes');
const levelsRouter = require('./routes/levelsRoutes');
const app = express();

app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ipayroll/api/v1/departments', deptsRouter);
app.use('/ipayroll/api/v1/levels', levelsRouter);

module.exports = app;
