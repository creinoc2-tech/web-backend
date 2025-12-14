const express = require("express");
const {  createCourse , ReadCourse } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/" ,  createCourse)
router.get("/" , ReadCourse )

module.exports = router;