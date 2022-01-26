const pool = require('../db');

exports.getAllSlipInfo = async (req, res) => {
  try {
    const { monthYear } = req.params;
    const payslipInto = await pool.query(
      "SELECT remunerations.month_year, remunerations.tax_relief, remunerations.income_tax, remunerations.loan_deduction, remunerations.bonus, remunerations.tier_one, remunerations.tier_two, CONCAT(employees.firstname, ' ',employees.lastname) AS full_name, sex.gender AS sex, employees.start_work_date, departments.name AS department, levels.name AS level, employees.id AS employee_id, employees.snnit_number, loans.initial_amount, loans.amount_left, rates.salary AS basic_salary FROM remunerations LEFT JOIN employees ON remunerations.employee_id = employees.id LEFT JOIN sex ON employees.sex_id = sex.id LEFT JOIN departments ON employees.department_id = departments.id LEFT JOIN levels ON employees.level_id = levels.id LEFT JOIN loans ON loans.employee_id = employees.id LEFT JOIN rates ON employees.level_id = rates.level_id WHERE remunerations.month_year=$1",
      [monthYear]
    );
    res.status(200).json(payslipInto.rows);
  } catch (err) {
    console.error(err.message);
  }
};
