const express = require('express');
const HomeRoute = require("./routes/HomeRoute");
const CourseRoute = require("./routes/CourseRoute");
const AuthMiddleware = require('./middleware/authMiddleware');
const server = express();
const PORT = 8089;

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


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








// ECMA SCRIPT - > nodejs follow these rules, browser follow these rules 
// GOOGle chome, firefox, internet explorer  -> 
// nodejs - people like us , + people aat microsoft , 

// FE - ES6 sytax import, export 

//BE - NODEjs - commonJS - module.export, require 