const studentModel = require("../model/studentModel");
// const bcrypt= require("bcrypt");

module.exports = {
  createStudent: async function (body) {
    const data = await studentModel.createStudent(body);
    return data;
  },
  getStudent: async function (body) {
    const data = await studentModel.getStudent(body);
    return data;
  },
  updateStudent: async function (body) {
    const data = await studentModel.updateStudent(body);
    return data;
  },
  deleteStudent: async function (id) {
    const student = await studentModel.getStudentById(id);
    if (student.count != 0) {
      return "Student already exists!";
    }
    const data = await studentModel.deleteStudent(id);

    return data;
  },
}