const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const deptsRouter = require('./routes/departmentsRoutes');
const levelsRouter = require('./routes/levelsRoutes');
const ratesRouter = require('./routes/ratesRoutes');
const employeesRouter = require('./routes/employeesRoutes');
const hoursRouter = require('./routes/hoursRoutes');
const remunerationsRouter = require('./routes/remunerationsRoutes');
const loansRouter = require('./routes/loansRoutes');
const payslipsRouter = require('./routes/payslipsRoutes');
const loginRouter = require('./routes/loginRoutes');

const app = express();

app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use('/ipayroll/api/v1/departments', deptsRouter);
app.use('/ipayroll/api/v1/levels', levelsRouter);
app.use('/ipayroll/api/v1/rates', ratesRouter);
app.use('/ipayroll/api/v1/employees', employeesRouter);
app.use('/ipayroll/api/v1/hours', hoursRouter);
app.use('/ipayroll/api/v1/remunerations', remunerationsRouter);
app.use('/ipayroll/api/v1/loans', loansRouter);
app.use('/ipayroll/api/v1/payslips', payslipsRouter);
app.use('/ipayroll/api/v1/login', loginRouter);

module.exports = app;
