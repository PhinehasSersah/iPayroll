const pool = require('../db');

exports.checkID = async (req, res, next, val) => {
  try {
    const id = await pool.query('SELECT id FROM rates WHERE ID=$1', [val]);
    if (id.rowCount < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid Rate',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const { levelId, salary } = req.body;
    if (!(levelId && salary)) {
      return res.status(400).json({
        status: 'fail',
        message: 'No Salary or Level provided',
      });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllRates = async (req, res) => {
  try {
    const rates = await pool.query('SELECT * FROM rates');
    res.status(200).json(rates.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getRate = async (req, res) => {
  try {
    const { id } = req.params;
    const rate = await pool.query('SELECT * FROM rates WHERE id=$1', [id]);
    res.status(200).json(rate.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.createRate = async (req, res) => {
  const {
    levelId,
    salary,
    loanDeduction,
    incomeTax,
    tierOne,
    tierTwo,
    taxRelief,
    bonus,
  } = req.body;
  const newRate = await pool.query(
    'INSERT INTO rates (level_id, salary, loan_deduction, income_tax, tier_one, tier_two, tax_relief, bonus ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      levelId,
      salary,
      loanDeduction,
      incomeTax,
      tierOne,
      tierTwo,
      taxRelief,
      bonus,
    ]
  );
  res.status(201).json(newRate.rows[0]);
  try {
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateRate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      levelId,
      salary,
      loanDeduction,
      incomeTax,
      tierOne,
      tierTwo,
      taxRelief,
      bonus,
    } = req.body;
    const rate = await pool.query(
      `UPDATE rates SET 
      level_id=$1, 
      salary=$2, 
      loan_deduction=$3,
      income_tax=$4,  
      tier_one=$5, 
      tier_two=$6,
      tax_relief=$7,
      bonus=$8 
      WHERE id=$9`,
      [
        levelId,
        salary,
        loanDeduction,
        incomeTax,
        tierOne,
        tierTwo,
        taxRelief,
        bonus,
        id,
      ]
    );
    res.status(200).json({ message: 'Successfully updated Rate' });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteRate = async (req, res) => {
  try {
    const { id } = req.params;
    const rate = await pool.query('DELETE FROM rates WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
  }
};
