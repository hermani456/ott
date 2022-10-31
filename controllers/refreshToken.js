const jwt = require("jsonwebtoken");
require("dotenv").config();
const { getUsers, postNewUser } = require("../db/queries");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  const users = await getUsers();
  const foundUser = users.find(
    (singleUser) => singleUser.refresh_token === refreshToken
  );
  if (!foundUser) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);
    const roles = Object.values(JSON.parse(foundUser.roles));
    const accessToken = jwt.sign(
      {
        userInfo: {
          username: foundUser.username,
          roles
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
