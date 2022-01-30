# iPayroll

An online employee management system which seeks to simplify employee management and give HR and Accounts department of a company just the rest they need.

## Features

This system provides the following functionality

- Create a new department
- Create a new Level for a department
- Add a new employee
- Manage tax deductions for employees
- Manage loans and loan deductions
- Generate employee payslips
- Email payslips to employees

## User groups

- Administrator
- Human Resources Department (HR)
- Accounts Department

### Administrator

The administrator sets the basic salary, income tax rate, loan deductions rate, tax relief rate, ssnit tier one and ssnit tier two for each level under each department.

The administrator also has the power to create and delete departments as well as create levels under the departments.

### Human Resources Department (HR)

The HUman Resources Department manages employees in the system. They are able to add employees to the sytem and retrieve employee details.

### Accounts

The Accounts department is responsible for payment and loans management. This department is able to add a loan to an employee.
They are also able to calculate wages for the month and send out payslips to employees. They first have to calculate the wages and they send out the payslips. This is automated and so all they have to do is choose the month for which they are calculating the wages and then click a button. same goes for sending emails.

### Calculations

All rates set by administrator apply to each employee at the end of each month according to their level. All calculations are done as according to the rates set by the administrator and in accordance with the [SSNIT](https://www.ssnit.org.gh/) and [GRA](https://gra.gov.gh/) websites.

## Stack

PERN STACK

- PostgreSQL
- Express
- React
- Node

## Node Libraries Used

- bcrypt
- jsonwebtoken
- html-pdf
- cors
- helmet
- nodemailer
- cors
- dotenv
- validator
- node-postgres
- express framework

## Running The Project Locally

Refer to db schema.sql in the project directory for the database schema. You will need to create all the tables as seen in the schema.
Run `npm install` command in both server and client directors to get missing pacakges. In different terminals, run` npm start` from the client directory and `node server.js` in the server directory. Thats it.

## Used API Routes

ipayrol/api/v1

| ROUTE                            | VERB   | ACTION                                                         |
| -------------------------------- | ------ | -------------------------------------------------------------- |
| /deparments                      | GET    | Returns all departments                                        |
| /deparments                      | POST   | Creates a new deparment                                        |
| /deparments/:id                  | DELETE | Deletes selected department                                    |
| /levels                          | GET    | Returns all levels                                             |
| /levels                          | POST   | Creates a new level                                            |
| /deparments/:id                  | DELETE | Deletes selected level                                         |
| /rates                           | POST   | Creates deduction and tax relief rates for a level             |
| /employees                       | POST   | Creates a new employee in the system                           |
| /employees/search/:fullName      | GET    | Returns details for searched employee                          |
| /employees//updateLoanStatus/:id | PUT    | Change the loan status of an employee                          |
| /employees/:id                   | DELETE | Delete selected employee                                       |
| /remunerations                   | POST   | Save employee wages calculations for a month                   |
| /loans                           | POST   | Creates a loan for an employee                                 |
| /loans/:id                       | POST   | Updates loan amount left                                       |
| /payslips/:monthYear             | GET    | Returns all payslip information for selected month in the year |
| /payslips/:monthYear             | POST   | Emails payslips for selected month to all employees            |

## Motivation

This is a capstone rolled out by Amalitech as part of the requirements for completion of Amalitech's graduate trainee program. We had to implement this to stand a chance of completing the trainee program.
For two programmers who started programming 'seriously' about seven month ago this was as exciting as it was scary for us. We finally got to try our hands on a real world project. We wondered if we could do it at first but with time we broke down the requirement and created everything from scratch.

## Challenges

The major challenge was that this was a sprint of just two weeks and so a few requirements are missing. We thought of other cool features too which we couldn't implement for the meantime. We will keep working on updating it.

Also, we had no idea of how employee tax deductions are done and so it took a lot of search to find out the specifics.

## Developers

[Phinehas Sersah](https://github.com/Phine1)

[Daniel Bontii](https://github.com/daniel-bontii)
