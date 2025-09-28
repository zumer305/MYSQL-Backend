// MYSQL+NODE .....................................

// npm init(package.json)
// npm i @faker-js/faker
const { faker } = require('@faker-js/faker');
let  getRandomUser=()=> {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
 
  };
}
// console.log(getRandomUser());





// npm i mysql2
const mysql = require('mysql2');
// Create the connection to database
const connection = mysql.createConnection({ //starting connection
  host: 'localhost',
  user: 'root',
  database: 'delta',
  password:'zumer2004',
});
try{
    connection.query('Show Tables',(err,result)=>{
if(err) throw err;
console.log(result);
    });

}
catch(err){
    console.log(err);
}
connection.end(); //ending
// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
//  show databases;
// use delta;
// show tables;
// node index.js;




