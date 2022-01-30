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

exports.getAllMonthSlipInfo = async (req, res) => {
  try {
    const { monthYear } = req.params;
    const payslipInfo = await pool.query(
      "SELECT remunerations.month_year, remunerations.salary, remunerations.tax_relief, remunerations.income_tax, remunerations.loan_deduction, remunerations.bonus, remunerations.tier_one, remunerations.tier_two, remunerations.total_earnings, remunerations.total_deductions, remunerations.total_tiers, remunerations.net_salary, CONCAT(employees.firstname, ' ',employees.lastname) AS full_name, sex.gender AS sex, employees.start_work_date, departments.name AS department, levels.name AS level, employees.id AS employee_id, employees.snnit_num, loans.initial_amount, loans.amount_left, rates.salary AS basic_salary FROM remunerations LEFT JOIN employees ON remunerations.employee_id = employees.id LEFT JOIN sex ON employees.sex_id = sex.id LEFT JOIN departments ON employees.department_id = departments.id LEFT JOIN levels ON employees.level_id = levels.id LEFT JOIN loans ON remunerations.employee_id = Loans.employee_id AND remunerations.month_year = loans.month_year LEFT JOIN rates ON employees.level_id = rates.level_id WHERE remunerations.month_year=$1",
      [monthYear]
    );
    res.status(200).json(payslipInfo.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server error');
  }
};

exports.sendSlip = async (req, res, next) => {
  try {
    const { monthYear } = req.body;

    const employees = await pool.query(
      "SELECT remunerations.month_year, remunerations.salary, remunerations.tax_relief, remunerations.income_tax, remunerations.loan_deduction, remunerations.bonus, remunerations.tier_one, remunerations.tier_two, remunerations.total_earnings, remunerations.total_deductions, remunerations.total_tiers, remunerations.net_salary, CONCAT(employees.firstname, ' ',employees.lastname) AS full_name, sex.gender AS sex, employees.start_work_date AS start_work_date, employees.email,departments.name AS department, levels.name AS level, employees.id AS employee_id, employees.snnit_num, employees.on_loan,loans.initial_amount, loans.amount_left, rates.salary AS basic_salary FROM remunerations LEFT JOIN employees ON remunerations.employee_id = employees.id LEFT JOIN sex ON employees.sex_id = sex.id LEFT JOIN departments ON employees.department_id = departments.id LEFT JOIN levels ON employees.level_id = levels.id LEFT JOIN loans ON remunerations.employee_id = Loans.employee_id AND remunerations.month_year = loans.month_year LEFT JOIN rates ON employees.level_id = rates.level_id WHERE remunerations.month_year=$1",
      [monthYear]
    );

    employees.rows.forEach(async employee => {
      await createPDF(
        pdfTemplate(employee),
        {
          format: 'A4',
          orientation: 'landscape',
        },
        `../main/payslips/${employee.full_name}-${employee.month_year}-payslip.pdf`
      );
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.authUser}`,
          pass: `${process.env.authPass}`,
        },
      });

      const mailOptions = {
        from: 'ipayrollv1@gmail.com',
        to: `${employee.email}`,
        subject: 'Monthly Payslip',
        text: `Hello ${employee.full_name}. Your monthly payslip is ready`,
        attachments: [
          {
            path: `../main/payslips/${employee.full_name}-${employee.month_year}-payslip.pdf`,
          },
        ],
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.error(error.message);
        } else {
          res.status(200).json('Email sent');
        }
      });
    });
    res.status(200).json('Mail sent');
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server error');
  }
};
