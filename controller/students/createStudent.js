const studentService = require("../../services/studentService");

module.exports = async function (req, res) {
  const data = await studentService.createStudent(req.body);
  res.send(data);
};
