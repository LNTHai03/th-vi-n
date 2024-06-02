const express = require('express');
const student = require("./models/studentModel");

const { addStudent, loginUser } = require('../controllers/StudentController');
const router = express.Router();

router.post('/', addStudent)
router.post('/', loginUser)

module.exports = router;
