const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query('SELECT id FROM levels WHERE ID=$1', [val]);
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid Level',
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
        message: 'No Level to add',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllLevels = async (req, res) => {
  try {
    const levels = await pool.query('SELECT * FROM levels');
    res.status(200).json(levels.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await pool.query('SELECT * FROM levels WHERE id=$1', [id]);
    res.status(200).json(level.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createLevel = async (req, res) => {
  const { name } = req.body;
  const newLevel = await pool.query(
    'INSERT INTO levels (name) VALUES($1) RETURNING *',
    [name]
  );
  res.status(201).json(newLevel.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};
exports.updateLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const level = await pool.query('UPDATE levels SET name=$1 WHERE id=$2', [
      name,
      id,
    ]);
    res.status(200).json({ message: 'Successfully updated level' });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await pool.query('DELETE FROM levels WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
