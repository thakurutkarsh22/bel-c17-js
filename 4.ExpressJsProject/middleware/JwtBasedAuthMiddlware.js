require('dotenv').config()
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET; 


function JwtBasedAuthMiddlware(req, res, next) {
    const headers = req.headers;
    const authorization = headers["authorization"]; //bearer {{token}}

    // if( bearer ){
    /**
     * rules -> relax and chill you are given everything 
     */
    // }

    // if( c2c ){
    /**
     * rules -> vaerify certificate 
     */
    // }

    const token = authorization && authorization.split(" ")[1]; // {{token}}

   if(!token) {
    res.status(400).json({
        message: "Please login you look like a new user!!"
    });
   } else {
    // 1. verify the token 
        jwt.verify(token, JWT_SECRET, (error, decodedString) => {
            if(error) {
                // 1. token epired

                // 2. token is bogus 

                res.status(400).json({
                    error,
                    message: "TOKEN IS INVALID"
                })

            } else {
                // everuthing is good 
                // db id -> save the user in matrix 
                //
                console.log("decodedString", decodedString);
                req.role = decodedString.role
                next();
            }
        })

   }


}


module.exports = JwtBasedAuthMiddlware