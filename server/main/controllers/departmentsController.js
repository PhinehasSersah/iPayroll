const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query('SELECT id FROM departments WHERE ID=$1', [
      val,
    ]);
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid department',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        status: 'fail',
        message: 'No department provided',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await pool.query('SELECT * FROM departments');
    res.status(200).json(departments.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await pool.query(
      'SELECT * FROM departments WHERE id=$1',
      [id]
    );
    res.status(200).json(department.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const newDept = await pool.query(
      'INSERT INTO departments (name) VALUES($1) RETURNING *',
      [name]
    );
    res.status(201).json(newDept.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const department = await pool.query(
      'UPDATE departments SET name=$1 WHERE id=$2',
      [name, id]
    );
    res.status(200).json({ message: 'Successfully updated department' });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await pool.query('DELETE FROM departments WHERE id=$1', [
      id,
    ]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
