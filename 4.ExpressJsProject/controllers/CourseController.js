const courses = require("../models/data");


function CreateCourse(req, res, next) {
    const body = req.body;
    courses.push(body);
    res.send(courses);
}

function GetAllCourses(req, res) {
    const data = courses
    
    // send back the payload 
    // it will stringify courses
    // set the headers to application/json
    res.json(data);
}

function GetCourseByID(req, res) {

}

module.exports = {CreateCourse, GetAllCourses, GetCourseByID}