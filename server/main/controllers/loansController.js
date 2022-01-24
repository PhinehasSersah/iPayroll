const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    console.log('checking id...');
    const id = await pool.query('SELECT id FROM loans WHERE employee_id=$1', [
      val,
    ]);
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Selected Employee owes no loan',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const { employeeId, initialAmount, amountLeft } = req.body;
    if (!(employeeId && initialAmount && amountLeft)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all details',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllLoans = async (req, res) => {
  try {
    const departments = await pool.query(
      "SELECT CONCAT(firstname, ' ', lastname) AS full_name, initial_amount, amount_left FROM employees INNER JOIN loans ON employees.id = loans.employee_id;"
    );
    res.status(200).json(departments.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createLoan = async (req, res) => {
  const { employeeId, initialAmount, amountLeft } = req.body;
  const newLoan = await pool.query(
    'INSERT INTO loans(employee_id, initial_amount, amount_left) VALUES($1, $2, $3) RETURNING *',
    [employeeId, initialAmount, amountLeft]
  );
  res.status(201).json(newLoan.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateLoan = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const { id } = req.params;
    const { amountLeft } = req.body;
    await pool.query('UPDATE loans SET amount_left=$1 WHERE employee_id=$2', [
      amountLeft,
      id,
    ]);
    res.status(200).json({ message: 'Successfully updated Loan' });
  } catch (err) {
    console.error(err.message);
  }
};
