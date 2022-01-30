const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query(
      'SELECT id FROM remunerations WHERE employee_id=$1',
      [val]
    );
    if (id.rowCount < 1) {
      return res.status(404).json('Invalid Employee');
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server error');
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const {
      employeeId,
      monthYear,
      salary,
      loanDeduction,
      taxRelief,
      incomeTax,
      bonus,
      tierOne,
      tierTwo,
      totalEarnings,
      totalDeductions,
      totalTiers,
      netSalary,
    } = req.body;

    if (
      !(
        employeeId &&
        monthYear &&
        (salary || salary === 0) &&
        (loanDeduction || loanDeduction === 0) &&
        (taxRelief || taxRelief === 0) &&
        (incomeTax || incomeTax === 0) &&
        (bonus || bonus === 0) &&
        (tierOne || tierOne === 0) &&
        (tierTwo || tierTwo === 0) &&
        (totalEarnings || totalEarnings === 0) &&
        (totalDeductions || totalDeductions === 0) &&
        (totalTiers || totalTiers === 0) &&
        (netSalary || netSalary === 0)
      )
    ) {
      return res.status(403).json('Please provide all remuneration details');
    }

    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server error');
  }
};

// exports.getEmpMonthRemueration = async (req, res) => {
//   try {
//     const { id, monthYear } = req.params;
//     const remuneration = await pool.query(
//       "SELECT remunerations.month_year, remunerations.tax_relief, remunerations.income_tax, remunerations.bonus, remunerations.loan_deduction, remunerations.tier_one, remunerations.tier_two, remunerations.total_earnings, remunerations.total_deductions, remunerations.total_tiers, remunerations.net_salary, concat(employees.firstname, ' ',employees.lastname) AS full_name, employees.snnit_number, departments.name AS department, levels.name AS level, loans.inital_amount, loans.amount_left FROM remunerations INNER JOIN employees ON remunerations.employee_id = employees.id INNER JOIN departments ON employees.department_id = departments.id INNER JOIN levels ON employees.level_id = levels.id INNER JOIN loans ON loans.month_year = remunerations.month_year WHERE employee_id=$1 and month_year=$2",
//       [id, monthYear]
//     );
//     res.status(200).json(remuneration.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json('Internal Server error');
//   }
// };

exports.createEmpMonthRemueration = async (req, res) => {
  const {
    employeeId,
    monthYear,
    salary,
    taxRelief,
    incomeTax,
    loanDeduction,
    bonus,
    tierOne,
    tierTwo,
    totalEarnings,
    totalDeductions,
    totalTiers,
    netSalary,
  } = req.body;

  const check = await pool.query(
    'SELECT * FROM remunerations WHERE employee_id=$1 AND month_year=$2 ',
    [employeeId, monthYear]
  );
  if (check.rowCount > 0) {
    return res
      .status(403)
      .json('Remunerations for the month have already been calculated');
  }

  const newRemuneration = await pool.query(
    'INSERT INTO remunerations (employee_id, month_year, salary,tax_relief, income_tax, loan_deduction, bonus, tier_one, tier_two, total_earnings, total_deductions, total_tiers, net_salary ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
    [
      employeeId,
      monthYear,
      salary,
      taxRelief,
      incomeTax,
      loanDeduction,
      bonus,
      tierOne,
      tierTwo,
      totalEarnings,
      totalDeductions,
      totalTiers,
      netSalary,
    ]
  );
  res.status(201).json(newRemuneration.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server error');
  }
};
