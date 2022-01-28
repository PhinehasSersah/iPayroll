const pdf = require('html-pdf');
const nodemailer = require('nodemailer');

const pool = require('../db');
const pdfTemplate = require('../template/payslip');

const createPDF = (html, options, path) =>
  new Promise((resolve, reject) => {
    pdf.create(html, options).toFile(path, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });

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

exports.createPDF = async (req, res, next) => {
  try {
    const employee = req.body;
    await createPDF(
      pdfTemplate(employee),
      {
        format: 'A4',
        orientation: 'landscape',
      },
      `../main/payslips/${employee.employeeId}-${employee.monthYear}payslip.pdf`
    );
    next();
  } catch (err) {
    console.error(err.message);
  }
};

exports.sendPDDF = async (req, res) => {
  try {
    const employee = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.authUser}`,
        pass: `${process.env.authPass}`,
      },
    });

    const mailOptions = {
      from: 'ipayrollv1@gmail.com',
      to: 'bontiidaniel97@gmail.com',
      subject: 'Monthly Payslip',
      text: `Hello ${employee.name}. Your monthly payslip is ready`,
      attachments: [
        {
          path: `../main/payslips/${employee.employeeId}-${employee.monthYear}payslip.pdf`,
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.error(err.message);
        res.json('Failed to send mail');
      } else {
        res.json('Email sent: ' + info.response);
      }
    });
  } catch (err) {
    console.error(err.message);
  }
};
