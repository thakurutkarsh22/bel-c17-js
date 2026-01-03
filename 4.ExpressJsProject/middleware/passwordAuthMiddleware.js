require('dotenv').config()
const SECRET_PASSWORD = process.env.SECRET_PASSWORD; 



function PassowrdAuthMiddleware(req, res, next) {
    const headers = req.headers;
    const authorization = headers["authorization"]; // asdf1235423523523

        console.log(authorization, "authorization")

    if(authorization === SECRET_PASSWORD) {
        // req is good
        next();
    } else {
        // req is bad 
        res.send({message: "error"});
    }

}


module.exports = PassowrdAuthMiddleware
