const userService = require('../../services/userService');

module.exports = async function (req, res) {
	const data = await userService.deleteUser(req.query.id);
	res.send(data);
};