module.exports = employee => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
        rel="stylesheet"
      />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- <link href="./resources/style.css" type="text/css" rel="stylesheet" /> -->
  
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .i {
          color: tomato;
          font-size: 3.5rem;
        }
        .top,
        .middle,
        .bottom {
          width: 80%;
        }
        body {
          font-size: 1.3em;
          line-height: 1.05;
        }
  
        .totals {
          background-color: #064420;
          color: white;
          border-spacing: 0;
          width: 80%;
          margin: auto;
        }
  
        html {
          font-family: Forum, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          background-color: #e4efe7;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .payslip-header {
          margin: 1% auto auto;
          text-align: center;
          font-size: 1.5rem;
        }
        .payslip-header img {
          display: block;
          height: 3rem;
          width: 8rem;
          object-fit: contain;
          margin: 0 auto;
        }
        hr.top-underline {
          width: 80%;
          margin: auto;
          border: 0;
          height: 1.3px;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0)
          );
        }
        .payslip-table .top {
          margin: auto;
        }
        .payslip-table .middle {
          border: 1px solid #064420;
  
          margin: auto;
        }
        .payslip-table .payslip-data {
          text-align: left;
        }
        td,
        th {
          border: 0px solid #dddddd;
          padding: 8px;
        }
  
        .payslip-table .calculations {
          display: flex;
          background-color: cadetblue;
          height: 2em;
          width: 90%;
          margin: auto;
        }
        .payslip-table .amount2 {
          margin-left: 10rem;
        }
        .payslip-table .calculations p {
          font-weight: bold;
        }
        .payslip-table .bottom {
          margin: auto;
          margin-bottom: 2em;
        }
        .payslip-table .bottom td {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <!-- amalitech logo and ipayroll -->
      <div class="payslip-header">
        <img
          src="https://github.com/Phine1/iPayroll/blob/main/client/src/amalitech.png?raw=true"
          alt="company logo"
          width="200"
        />
  
        <div class="payroll">
          <strong class="i">i</strong>Payroll Employee PaySlip
        </div>
      </div>
      <hr class="top-underline" />
      <div class="payslip-table">
        <table class="top">
          <tr>
            <td>EmployeeId: ${employee.employee_id}</td>
            <td>Level: ${employee.level}</td>
            <td>Period:${employee.month_year}</td>
          </tr>
          <tr>
            <td>Employee Name: ${employee.full_name}</td>
            <td>Department:${employee.department}</td>
            <td>Start Date: ${employee.start_work_date
              .toString()
              .slice(4, 15)}</td>
          </tr>
          <tr>
            <td>SSNIT number: ${employee.snnit_num}</td>
            <td>
              Loan Amount Taken: ${
                employee.on_loan === true ? employee.initial_amount : ''
              }
            </td>
            <td>
              Loan Amuont Left: ${
                employee.on_loan === true ? employee.amount_left : ''
              }
            </td>
          </tr>
        </table>
        <hr class="top-underline" />
        <table class="middle">
          <thead class="payslip-data">
            <tr>
              <th>Criterion</th>
              <th>Earnings (GHC)</th>
              <th>Deductions (GHC)</th>
            </tr>
          </thead>
          <tbody class="table-content">
            <tr>
              <td>Basic Salary</td>
              <td>${employee.basic_salary}</td>
            </tr>
            <tr>
              <td>Working Bonus</td>
              <td>${employee.bonus}</td>
            </tr>
            <tr>
              <td>Tax Relief</td>
              <td>${employee.tax_relief}</td>
            </tr>
            <tr>
              <td>Loan Amount</td>
              <td>
                ${employee.on_loan === true ? employee.initial_amount : ''}
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Income Tax</td>
              <td></td>
              <td>${employee.income_tax}</td>
            </tr>
            <tr>
              <td>SSNIT deduction</td>
              <td></td>
              <td>${employee.tier_one}</td>
            </tr>
            <tr>
              <td>Loan deduction</td>
              <td></td>
              <td>${employee.loan_deduction}</td>
            </tr>
          </tbody>
        </table>
        <table class="totals">
          <tr>
            <td colspan="2">
              Total Earnings: GHC ${employee.total_earnings}GHC
            </td>
            <td style="text-align: right">
              Total Deductions: GHC ${employee.total_deductions}
            </td>
          </tr>
        </table>
  
        <table class="bottom">
          <tr>
            <td colspan="2">
              Gross Salary: GHC ${employee.total_earnings}
            </td>
            <td style="text-align: right">
              Employee SSNIT Contribution: GHC ${employee.tier_one}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              Total Deductions: GHC ${employee.total_deductions}
            </td>
            <td style="text-align: right">
              Company SSNIT Contribution: GHC ${employee.tier_two}
            </td>
          </tr>
          <tr>
            <td colspan="2">Net Salary: GHC ${employee.net_salary}</td>
            <td colspan="2" style="text-align: right">
              Total SSNIT Contribution: GHC ${employee.total_tiers}
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </body>
  </html> 
    `;
};
