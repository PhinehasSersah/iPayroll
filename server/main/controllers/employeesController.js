const pool = require("../db");

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query("SELECT id FROM employees WHERE id=$1", [val]);
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid Employee",
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const { fname, lname, dob, sex, dept, email, level, phoneNum, startDate } =
      req.body;
    if (
      !(
        fname &&
        lname &&
        dob &&
        sex &&
        dept &&
        email &&
        level &&
        phoneNum &&
        startDate
      )
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide all required Information",
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await pool.query("SELECT * FROM employees");
    res.status(200).json(employees.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await pool.query("SELECT * FROM employees WHERE id=$1", [
      id,
    ]);
    res.status(200).json(employee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getEmployeeByFullName = async (req, res) => {
  try {
    const { fullName } = req.params;
    const employee = await pool.query(
      "SELECT * FROM employees WHERE LOWER(CONCAT(firstname, ' ' ,lastname))=$1 OR LOWER(CONCAT(lastname, ' ' ,firstname))=$1",
      [fullName.toLowerCase()]
    );
    if (employee.rowCount < 0) {
      return res.status(404).json({
        status: "fail",
        message: "No employee found",
      });
    }
    res.status(200).json(employee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createEmployee = async (req, res) => {
  const {
    fname,
    lname,
    dob,
    sex,
    dept,
    email,
    level,
    phoneNum,
    startDate,
    snnitNum,
    onLoan,
  } = req.body;
  const newEmployee = await pool.query(
    "INSERT INTO employees (firstname, lastname, date_of_birth, sex_id, department_id, email, level_id, phone_number, start_work_date, snnit_number, on_loan) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
    [
      fname,
      lname,
      dob,
      sex,
      dept,
      email,
      level,
      phoneNum,
      startDate,
      snnitNum,
      onLoan,
    ]
  );
  res.status(201).json(newEmployee.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fname,
      lname,
      dob,
      sex,
      dept,
      email,
      level,
      phoneNum,
      startDate,
      snnitNum,
    } = req.body;
    const employee = await pool.query(
      "UPDATE employees SET firstname=$1, lastname=$2, date_of_birth=$3, sex_id=$4, department_id=$5, email=$6, level_id=$7, phone_number=$8, start_work_date=$9, snnit_number=$10 WHERE id=$11",
      [
        fname,
        lname,
        dob,
        sex,
        dept,
        email,
        level,
        phoneNum,
        startDate,
        snnitNum,
        id,
      ]
    );
    res.status(200).json({ message: "Successfully updated Employee" });
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateEmpLoanStatus = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const { onLoan } = req.body;
    await pool.query("UPDATE employees SET on_loan=$1 WHERE id=$2", [
      onLoan,
      id,
    ]);
    res
      .status(200)
      .json({ message: "Successfully updated Employee Loan Status" });
  } catch (err) {
    console.error(err.message);
  }
};
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM employees WHERE id=$1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
