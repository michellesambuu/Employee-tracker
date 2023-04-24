const mysql=require("mysql2")

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'My091508',
      database: 'employee_db'
    },
    
  );
  module.exports=connection