const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

const deptsRouter = require('./routes/departmentsRoutes');
const levelsRouter = require('./routes/levelsRoutes');
const ratesRouter = require('./routes/ratesRoutes');
const employeesRouter = require('./routes/employeesRoutes');
const hoursRouter = require('./routes/hoursRoutes');
const remunerationsRouter = require('./routes/remunerationsRoutes');
const loansRouter = require('./routes/loansRoutes');
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
app.use('/ipayroll/api/v1/rates', ratesRouter);
app.use('/ipayroll/api/v1/employees', employeesRouter);
app.use('/ipayroll/api/v1/hours', hoursRouter);
app.use('/ipayroll/api/v1/remunerations', remunerationsRouter);
app.use('/ipayroll/api/v1/loans', loansRouter);

module.exports = app;
