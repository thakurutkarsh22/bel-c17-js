const express = require('express');
const HomeRoute = require("./routes/HomeRoute");
const CourseRoute = require("./routes/CourseRoute");
const AuthRoute = require("./routes/AuthRoute");
const mongoose = require("mongoose");
const server = express();

require('dotenv').config() // it will load all .env variables in process.env

const PORT = process.env.PORT;

// COMMON MIDDLWWARE 
// not giviing any path means it will work for 100% of the incoming request
// express.json() is a middleware -  used to parse incoming requests with JSON payloads says go to NEXT handler 
server.use(express.json());


// server.use(AuthMiddleware);




// will aloow all request (GET, POST , PUT, DELETE, PATCH)
server.use("/api/v1/", HomeRoute);


//  we have to create a new FEATURE :  COURSES  (getAllCOurses, createCourses, getaPerticularCourse)
// get all courses

server.use("/api/v1/courses", CourseRoute)




// // query params -  https://www.google.com/search?q=sachin 

// server.get('/api/v1/users', (req, res) => {

//     const queryParams = req.query;
//     const gender = queryParams.gender 
//     const age = queryParams.age
//     if(!gender ) {
//         throw Error("where is gender mate")
//     }


//     res.send("user you want to search for gender " + gender + " " + age);
// });


// authentication route

server.use("/api/v1/auth", AuthRoute);

const DB_NAME = process.env.DB_NAME
const DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION + DB_NAME).then(() => {
    console.log("db connected successfully");
})


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








// ECMA SCRIPT - > nodejs follow these rules, browser follow these rules 
// GOOGle chome, firefox, internet explorer  -> 
// nodejs - people like us , + people aat microsoft , 

// FE - ES6 sytax import, export 

//BE - NODEjs - commonJS - module.export, require 