use employees

INSERT INTO department 
    (name)
VALUES 
    ('Sales'),
    ('Engiineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role 
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1),
    ('Sales Lead', 100000, 1);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
     ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik',, 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);


