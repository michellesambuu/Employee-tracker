INSERT INTO department (id,name)
VALUES (1,"Finance"),
       ( 2,"Accounting"),
       (3, "Marketing"),
       (4,"Engineering");

INSERT INTO role (id,title,salary,department_id)
VALUES (1,"Financial analyst",63.000, 1),
       ( 2,"Accountant", 45.000, 2),
       (3, "Marketing analyst",40.000,3),
       (4,"Software Engineer", 50.000,4);

INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES (1,"Max","Pat", 1,null),
       ( 2,"Mary","Roe",  2,1),
       (3, "Edward","Kane",3,1),
       (4,"John", "Reid",4, null);