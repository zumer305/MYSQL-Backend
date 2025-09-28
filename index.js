// MYSQL+NODE .....................................

// npm init(package.json)
// npm i @faker-js/faker
const { faker } = require('@faker-js/faker');
let  getRandomUser=()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
  ];
  
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
let q='insert into user(id,username,email,password) values ?';
let data=[];
for(let i=1;i<=100;i++){
    data.push(getRandomUser());
}
// let user=[['3','zumerr','zumerr@gmail.com','12345'],['2','ali','ali@gmail.com','123456']];
try{
    connection.query(q,[data],(err,result)=>{  //pacakgeinstall baki yah the (workbench,cli,sqlfiles)
if(err) throw err;
console.log(result);
// console.log(result.length);
// console.log(result[0]);
// console.log(result[1]);
    });

}
catch(err){
    console.log(err);
}
connection.end(); //ending


// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
// password



//  show databases;
// use delta;
// show tables;
// node index.js;






// source schema.sql; 



// getRandomUser,patch(update username)







