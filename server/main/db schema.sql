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