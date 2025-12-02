const express = require('express');
const { HomePageResponse, AboutsPageResponse } = require('../Controllers/HomeController');
const router = express.Router();



router.get("/", HomePageResponse)
router.get("/home", HomePageResponse)
router.get("/abouts", AboutsPageResponse)

module.exports = router;