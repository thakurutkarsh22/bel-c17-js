const express = require('express');
const { GetAllCourses, CreateCourse, GetCourseByID } = require('../controllers/CourseController');
const AuthMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// get all courses
router.get("/", AuthMiddleware, GetAllCourses)

// create course
router.post("/", CreateCourse)

// get course by ID - by url params 
router.get("/:id", GetCourseByID)


module.exports = router;