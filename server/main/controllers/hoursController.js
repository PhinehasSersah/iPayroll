const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query('SELECT id FROM work_hours WHERE ID=$1', [val]);
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
    const { employeeId, date, hours } = req.body;
    if (!(employeeId && date && hours)) {
      return res.status(400).json({
        status: 'fail',
        message: 'No Employee/date/hours Provided',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllHours = async (req, res) => {
  try {
    const hours = await pool.query('SELECT * FROM work_hours');
    res.status(200).json(hours.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getEmployeeHours = async (req, res) => {
  try {
    const { id } = req.params;
    const hours = await pool.query(
      'SELECT * FROM work_hours WHERE employee_id=$1',
      [id]
    );
    res.status(200).json(hours.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createEmployeeHours = async (req, res) => {
  const { employeeId, date, hours } = req.body;
  const newHours = await pool.query(
    'INSERT INTO work_hours (employee_id, work_date, working_hours) VALUES($1, $2, $3) RETURNING *',
    [employeeId, date, hours]
  );
  res.status(201).json(newHours.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateHours = async (req, res) => {
  try {
    const { id, date } = req.params;
    const { employeeId, workDate, hours } = req.body;
    await pool.query(
      'UPDATE work_hours SET employee_id=$1, work_date=$2, working_hours=$3 WHERE employee_id=$4 AND work_date=$5',
      [employeeId, workDate, hours, id, date]
    );
    res.status(200).json({ message: 'Successfully updated Hours' });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteHours = async (req, res) => {
  try {
    const { id, date } = req.params;
    await pool.query(
      'DELETE FROM work_hours WHERE employee_id=$1 AND work_date=$2',
      [id, date]
    );
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
