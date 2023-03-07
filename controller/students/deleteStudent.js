const studentService = require('../../services/studentService');

module.exports = async function (req, res) {
	const data = await studentService.deleteStudent(req.query.id);
	res.send(data);
};