const server = require("./app");
const mongoose = require("mongoose");


require('dotenv').config() // it will load all .env variables in process.env

const PORT = process.env.PORT;



const DB_NAME = process.env.DB_NAME
const DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION + DB_NAME).then(() => {
    console.log("db connected successfully");
})



// if we forget to handle the exception in the application this will do it for all the exceptions

// process.on('uncaughtException', (err) => {
//   // Log the error, send notification, perform cleanup, etc.
//   console.error('Uncaught Exception:', err.message);
//   // It is highly recommended to exit the process after an uncaught exception
//   // to avoid running in an unstable state. A process manager should restart the app.
//   process.exit(1); 
// })


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








// ECMA SCRIPT - > nodejs follow these rules, browser follow these rules 
// GOOGle chome, firefox, internet explorer  -> 
// nodejs - people like us , + people aat microsoft , 

// FE - ES6 sytax import, export 

//BE - NODEjs - commonJS - module.export, require 