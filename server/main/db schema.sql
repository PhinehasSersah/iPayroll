CREATE TABLE ipayroll;

CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE levels(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE rates(
    id SERIAL PRIMARY KEY,
    level_id INTEGER REFERENCES levels(id) NOT NULL UNIQUE,
    salary REAL NOT NULL,
    loan_deduction REAL NOT NULL,
    income_tax REAL NOT NULL,
    tier_one REAL NOT NULL,
    tier_two REAL NOT NULL,
    tax_relief REAL NOT NULL,
    bonus REAL NOT NULL
);

CREATE TABLE sex(
    id SERIAL PRIMARY KEY,
    gender VARCHAR(20) NOT NULL
);

INSERT INTO
    sex (gender)
VALUES
    ('Male');

INSERT INTO
    sex (gender)
VALUES
    ('Female');

INSERT INTO
    sex (gender)
VALUES
    ('Other');

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    sex_id INTEGER REFERENCES sex(id) NOT NULL,
    department_id INTEGER REFERENCES departments(id) NOT NULL,
    email VARCHAR(50) NOT NULL,
    level_id INTEGER REFERENCES levels(id) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    start_work_date DATE NOT NULL,
    snnit_num VARCHAR(20) NOT NULL,
    on_loan BOOLEAN NOT NULL
);

CREATE TABLE work_hours(
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id) NOT NULL,
    work_date DATE NOT NULL,
    working_hours REAL NOT NULL,
    CONSTRAINT ONE_HOURS_PER_DAY UNIQUE(employee_id, work_date)
);

CREATE TABLE remunerations(
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id),
    month_year VARCHAR(10) NOT NULL,
    salary REAL NOT NULL,
    loan REAL NOT NULL,
    tax_relief REAL NOT NULL,
    income_tax REAL NOT NULL,
    loan_deduction REAL NOT NULL,
    bonus REAL NOT NULL,
    tier_one REAL NOT NULL,
    tier_two REAL NOT NULL,
    total_earnings REAL NOT NULL,
    total_deductions REAL NOT NULL,
    total_tiers REAL NOT NULL,
    net_salary REAL NOT NULL,
    CONSTRAINT ONE_REMUNERATION_PER_MONTH UNIQUE(employee_id, month_year)
);

CREATE TABLE loans(
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id) NOT NULL,
    month_year VARCHAR(10) NOT NULL,
    initial_amount REAL NOT NULL,
    amount_left REAL NOT NULL
);

CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE ipr_users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    upassword VARCHAR(255) NOT NULL,
    office VARCHAR(50)
);