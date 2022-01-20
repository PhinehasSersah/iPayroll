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
    salary REAL,
    loan_deduction REAL,
    income_tax REAL,
    tier_one REAL,
    tier_two REAL,
    tax_relief REAL,
    bonus REAL
);

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    date_of_birth DATE,
    department_id INTEGER REFERENCES departments(id),
    email VARCHAR(50),
    level_id INTEGER REFERENCES levels(id),
    phone_number VARCHAR(50),
    start_work_date DATE
);

CREATE TABLE hours(
    id SERIAL PRIMARY KEY,
    employee_id INTEGER REFERENCES employees(id) NOT NULL,
    work_date DATE,
    working_hours REAL NOT NULL,
    CONSTRAINT ONE_HOURS_PER_DAY UNIQUE(employee_id, work_date)
);