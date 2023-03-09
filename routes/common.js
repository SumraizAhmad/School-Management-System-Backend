var express = require("express");
var router = express.Router();

const {
   login,logout
} = require("../Controller/index");


router.post("/login", login);
router.post("/logout", logout);


module.exports = router;