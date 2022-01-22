-- CREATE TABLE ipr_users(
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50),
--     email VARCHAR(50),
--     upassword PASSWORD,
--     department VARCHAR(50)
-- );
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

CREATE TABLE sex(
    id SERIAL PRIMARY KEY,
    gender VARCHAR(20) NOT NULL
);

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
    snnit_num VARCHAR(20) NOT NULL
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
    month_year VARCHAR(10),
    tax_relief REAL,
    income_tax REAL,
    loan_deduction REAL,
    gra REAL,
    tier_one REAL,
    tier_two REAL,
    CONSTRAINT ONE_REMUNERATION_PER_MONTH UNIQUE(employee_id, month_year)
);

-- CREATE TABLE loans(
--     id SERIAL PRIMARY KEY,
--     employee_id INTEGER REFERENCES employees(id),
--     amount REAL
-- );