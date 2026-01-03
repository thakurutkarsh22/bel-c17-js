const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config()


async function register(req, res) {

    const {username, password, email, age, gender} = req.body;


    // create a user model object 
    const userObject = UserModel({
        username,
        password: await encryptPassword(password) ,
        email,
        age,
        gender
    })


    // talking to DB 

    try {
        const response = await userObject.save();
        res.status(201).json({
            message: "user created successfully",
            response
        })
    } catch(error) {
        res.status(500).json({
            message: "something went wrong",
            error
        })
    }


}


async function encryptPassword(plainTextPassword) {
    const saltRounds = await bcrypt.genSalt(10);
    const encryptedPassword = bcrypt.hashSync(plainTextPassword, saltRounds);
    return encryptedPassword
}

async function login(req, res) {

    const {username, password} = req.body;

    const user = await findUserByUserName(username);

    if(!user[0]) {
        res.status(400).json({
            message: "No user like this"
        })
    } else {
        // check for the password 
        const hashedPasword = user[0].password;
        const result = bcrypt.compareSync(password, hashedPasword); // password match 
        let token = "";
        if(result) {

            console.log("confirming user role", user[0].role)

            const payload = {
                id: user[0]._id,
                email: user[0].email,
                name: user[0].username,
                role: user[0]?.role || "user"
            }


            token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "10000"
                }
            );
        }
        res.status(200).json({
            message: result,
            token
        })
    }




    
    
}

async function findUserByUserName(username) {
    return await UserModel.find({ username: username })
}


module.exports = {
    register,
    login
}