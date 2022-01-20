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
    tax_deductions REAL,
    income_tax REAL,
    staff_loan_deductions REAL,
    tier_one REAL,
    tier_two REAL
);