module.exports = (employee) => {
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
            line-height: 1.02;
          }
    
          .totals {
            background-color: #064420;
            color: white;
            border-spacing: 0;
            width: 80%;
            margin: auto;
          }
    
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
    
          html {
            font-family: Forum, -apple-system, BlinkMacSystemFont, "Segoe UI",
              "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            background-color: #e4efe7;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .payslip-header {
            margin: 2% auto auto;
            text-align: center;
          }
          .payslip-header img {
            display: block;
            height: 3rem;
            width: 8rem;
            object-fit: contain;
            margin: auto;
          }
          .payslip-header {
            font-size: 1.5rem;
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
          .payslip-table {
            margin: auto;
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
            /* justify-content: center; */
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
          <img src="https://github.com/Phine1/iPayroll/blob/main/client/src/amalitech.png?raw=true" alt="company logo" width="200" />
    
          <div class="payroll">
            <strong class="i">i</strong>Payroll Employee PaySlip
          </div>
        </div>
        <hr class="top-underline" />
        <div class="payslip-table">
          <table class="top">
            <tr>
              <td>EmployeeId: ${employee.employeeId}</td>
              <td>Level: ${employee.level}</td>
              <td>Period:${employee.monthYear}</td>
            </tr>
            <tr>
              <td>Employee Name: ${employee.name}</td>
              <td>Department:${employee.department}</td>
              <td>Start Date: ${employee.startDate}</td>
            </tr>
            <tr>
              <td colspan="3">SSNIT number: ${employee.ssnitNum}</td>
            </tr>
          </table>
          <hr class="top-underline" />
          <table class="middle">
            <thead class="payslip-data">
              <tr>
                <th>Criterion</th>
                <th>Earnings</th>
                <th>Deductions</th>
              </tr>
            </thead>
            <tbody class="table-content">
              <tr>
                <td>Basic Salary</td>
                <td>${employee.salary}</td>
              </tr>
              <tr>
                <td>Working Bonus</td>
                <td>${employee.bonus}</td>
              </tr>
              <tr>
                <td>Tax Relief</td>
                <td>${employee.taxRelief}</td>
              </tr>
              <tr>
                <td>Loan Amount</td>
                <td>${employee.amountTaken}</td>
                <td></td>
              </tr>
              <tr>
                <td>Income Tax</td>
                <td></td>
                <td>${employee.loanDeduction}</td>
              </tr>
              <tr>
                <td>SSNIT deduction</td>
                <td></td>
                <td>${employee.tierOne}</td>
              </tr>
              <tr>
                <td>Loan deduction</td>
                <td></td>
                <td>${employee.loanDeduction}</td>
              </tr>
            </tbody>
          </table>
          <table class="totals">
            <tr>
              <td colspan="2">Total Earnings: GHC ${employee.totalSalary}GHC</td>
              <td style="text-align: right">Total Deductions: GHC ${employee.totalSalary}</td>
            </tr>
          </table>
    
          <table class="bottom">
            <tr>
              <td colspan="2">Gross Salary: GHC ${employee.grossSalary}</td>
              <td style="text-align: right">Employee SSNIT Contribution: GHC ${employee.totalContribution}</td>
            </tr>
            <tr>
              <td colspan="2">Deductions: GHC ${employee.loanDeduction}</td>
              <td style="text-align: right">Company SSNIT Contribution: GHC ${employee.ssnitContribution}</td>
            </tr>
            <tr>
              <td colspan="2">Net Salary: GHC ${employee.netSalary}</td>
              <td colspan="2" style="text-align: right">
                Total SSNIT Contribution: GHC ${employee.totalContribution}
              </td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </body>
    </html>  
    `;
};
