const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query('SELECT id FROM hours WHERE ID=$1', [val]);
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
    const hours = await pool.query('SELECT * FROM hours');
    res.status(200).json(hours.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getEmployeeHours = async (req, res) => {
  try {
    const { id } = req.params;
    const hours = await pool.query('SELECT * FROM hours WHERE employee_id=$1', [
      id,
    ]);
    res.status(200).json(hours.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createEmployeeHours = async (req, res) => {
  const { employeeId, date, hours } = req.body;
  const newHour = await pool.query(
    'INSERT INTO hours (employeeId, date, hours) VALUES($1, $2, $3) RETURNING *',
    [employeeId, date, hours]
  );
  res.status(201).json(newHour.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateHours = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeId, date, hours } = req.body;
    await pool.query(
      'UPDATE hours SET employee_id=$1, date=$2, hours=$3 WHERE id=$4',
      [employeeId, date, hours, id]
    );
    res.status(200).json({ message: 'Successfully updated Hours' });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteHours = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM hours WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
