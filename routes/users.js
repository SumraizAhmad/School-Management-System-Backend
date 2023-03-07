var express = require('express');
var router = express.Router();

const {createUser, getUser, getUserById, updateUser,deleteUser}= require("../controller/index");

router.post('/createUser', createUser);
router.get('/getUser', getUser);
router.get('/getUserById', getUserById);
router.put('/updateUser', updateUser);
router.delete('/deleteUser',deleteUser)

module.exports = router;
