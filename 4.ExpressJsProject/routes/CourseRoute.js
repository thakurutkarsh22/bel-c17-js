const express = require('express');
const { GetAllCourses, CreateCourse, GetCourseByID } = require('../controllers/CourseController');
const PassowrdAuthMiddleware = require('../middleware/passwordAuthMiddleware');
const JwtBasedAuthMiddlware = require('../middleware/JwtBasedAuthMiddlware');
const adminCheck = require('../middleware/admincheck.middleware');

const router = express.Router();

// get all courses
router.get("/", PassowrdAuthMiddleware, GetAllCourses)

// create course
router.post("/",  JwtBasedAuthMiddlware, adminCheck("admin"), CreateCourse)

// get course by ID - by url params 
router.get("/:id", GetCourseByID)


module.exports = router;