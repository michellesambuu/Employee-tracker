const inquirer = require("inquirer")
const db =require("./db/connection")
require("console.table")

function mainPrompts(){
    inquirer.prompt([{
        type:"list",
        name:"choose",
        message:"which action would you like to take?",
        choices:["View all employees", "View all departments", "View all roles","Add employee","Add deparment","Add role","Update employee role","quit"]

    }])
    .then((answer)=>{
        switch(answer.choose){
            case "View all employees":
            viewAllEmployees()  
            break;
            case "View all departments":
            viewAllDepartments()  
            break;
            case "View all roles":
            viewAllRoles()  
            break;
            case "Add employee":
            addEmployee()  
            break;
            case "Add role":
            addRole()  
            break;
            case "Update employee role":
                updateEmployeeRole()  
                break;
          default:
            quit() 
       
            
        }
    })
}

function viewAllEmployees(){
    db.query(`SELECT * FROM employee LEFT JOIN role ON employee.role_id=role.id`,(err, res)=>{
        if(err) throw err
        console.table(res)
        mainPrompts()
    })
}
function viewAllDepartments(){
    db.query(`SELECT * FROM department`,(err,res)=>{
        if(err) throw err
        console.table(res)
        mainPrompts()
    })
}

mainPrompts()