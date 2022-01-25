const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query(
      'SELECT id FROM remunerations WHERE employee_id=$1',
      [val]
    );
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid Employee',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const {
      employeeId,
      monthYear,
      taxRelief,
      incomeTax,
      loanDeduction,
      bonus,
      tierOne,
      tierTwo,
    } = req.body;
    if (
      !(
        employeeId &&
        monthYear &&
        taxRelief &&
        incomeTax &&
        loanDeduction &&
        bonus &&
        tierOne &&
        tierTwo
      )
    ) {
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

exports.getEmpMonthRemueration = async (req, res) => {
  try {
    const { id, monthYear } = req.params;
    const remuneration = await pool.query(
      "SELECT remunerations.month_year, remunerations.tax_relief, remunerations.income_tax, remunerations.bonus, remunerations.loan_deduction, remunerations.tier_one, remunerations.tier_two, concat(employees.firstname, ' ',employees.lastname) AS full_name, employees.snnit_number, departments.name AS department, levels.name AS level FROM remunerations INNER JOIN employees ON remunerations.employee_id = employees.id INNER JOIN departments ON employees.department_id = departments.id INNER JOIN levels ON employees.level_id = levels.id WHERE employee_id=$1 and month_year=$2",
      [id, monthYear]
    );
    res.status(200).json(remuneration.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createEmpMonthRemueration = async (req, res) => {
  const {
    employeeId,
    monthYear,
    taxRelief,
    incomeTax,
    loanDeduction,
    bonus,
    tierOne,
    tierTwo,
  } = req.body;
  const newRemuneration = await pool.query(
    'INSERT INTO remunerations (employee_id, month_year, tax_relief, income_tax, loan_deduction, bonus, tier_one, tier_two ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      employeeId,
      monthYear,
      taxRelief,
      incomeTax,
      loanDeduction,
      bonus,
      tierOne,
      tierTwo,
    ]
  );
  res.status(201).json(newRemuneration.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};
