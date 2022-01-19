CREATE TABLE departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE levels(
    id SERIAL PRIMARY KEY,
    department_id INTEGER REFERENCES departments(id) NOT NULL,
    name VARCHAR(50)
);