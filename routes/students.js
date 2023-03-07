var express = require("express");
var router = express.Router();

const {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent
} = require("../controller/index");

router.post("/createStudent", createStudent);
router.get("/getStudent", getStudent);
router.put("/updateStudent", updateStudent);
router.delete("/deleteStudent", deleteStudent)

module.exports = router;
