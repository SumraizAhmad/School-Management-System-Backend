const { models } = require("../model/definition");
const jwtSecret = require("../config.json");
const jwt = require("jsonwebtoken");
let refreshToken = [];
function generateAccessToken(user) {
  return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: "5000s" });
}
module.exports = {
  login: async function (body) {
    let user = await models.User.findOne({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      return "invalid username/password";
    }
    user = user.dataValues;
    const accessToken = generateAccessToken(user);
    const token = jwt.sign(user, jwtSecret.jwt.secret);
    refreshToken.push(token);
    return { accessToken: accessToken, refreshToken: token };
  },
  logout: async function (body) {
    refreshToken = refreshToken.filter((token) => token !== body.token);
    return { refreshToken: refreshToken };
  },
};