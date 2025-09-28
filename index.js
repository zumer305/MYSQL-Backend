// MYSQL+NODE .....................................

// npm init(package.json)
// npm i @faker-js/faker
// const { faker } = require('@faker-js/faker');
// let  getRandomUser=()=> {
//   return [
//      faker.string.uuid(),
//      faker.internet.username(),
//      faker.internet.email(),
//      faker.internet.password(),
//   ];
  
// }
// console.log(getRandomUser());














// // npm i mysql2
const mysql = require('mysql2');
// Create the connection to database
const connection = mysql.createConnection({ //starting connection
  host: 'localhost',
  user: 'root',
  database: 'delta',
  password:'zumer2004',
});
// let q='insert into user(id,username,email,password) values ?';
// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }
// // let user=[['3','zumerr','zumerr@gmail.com','12345'],['2','ali','ali@gmail.com','123456']];
// try{
//     connection.query(q,[data],(err,result)=>{  //pacakgeinstall baki yah the (workbench,cli,sqlfiles)
// if(err) throw err;
// console.log(result);
// // console.log(result.length);
// // console.log(result[0]);
// // console.log(result[1]);
//     });

// }
// catch(err){
//     console.log(err);
// }
// connection.end(); //ending


// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
// password



//  show databases;
// use delta;
// show tables;
// node index.js;






// source schema.sql; 



// getRandomUser,patch(update username)
// npm i express 
// npm i uuid (for new data add)
// HOME PAGE 
const express=require('express');
const app=express();
app.listen(8080,()=>{
    console.log('app is listening');
});
app.get('/', (req, res) => {
    let q = 'SELECT COUNT(*) as total FROM user';
    
    connection.query(q, (err, result) => {
        if (err) {
            console.log("Database Error: ", err);
            return res.send('some error in database'); // stop further execution
        }

        let count =(result[0].total);
        res.render('home.ejs',{count});
    });
});



const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

// npm i ejs 
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));



// user page 
app.get('/user',(req,res)=>{
    let q='Select * from user';
        connection.query(q, (err, result) => {
        if (err) {
            console.log("Database Error: ", err);
            return res.send('some error in database'); // stop further execution
        }

     
        res.render("user.ejs",{result});
    });

   
})


// edit route 
app.get("/user/:id/edit",(req,res)=>{
    let{id}=req.params;
    let q=`select * from user where id="${id}"`;
          connection.query(q, (err, result) => {
        if (err) {
            console.log("Database Error: ", err);
            return res.send('some error in database'); // stop further execution
        }

    let user=result[0];
        res.render("edit.ejs",{user});
    });
    
})

// npm install method-override 
app.patch("/user/:id",(req,res)=>{
     let{id}=req.params;
     let{password:formPass,username:newUser}=req.body;//database sa
    let q=`select * from user where id="${id}"`; 
          connection.query(q, (err, result) => {
        if (err) {
            console.log("Database Error: ", err);
            return res.send('some error in database'); // stop further execution
        }

    let user=result[0];
    if(formPass!=user.password)
    res.send("wrong password");
    else{
        let q2=`update user set username="${newUser}" where id="${id}"` ;
        connection.query(q2,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");//direct us page pr
        })
    }
       
    });
    

})










