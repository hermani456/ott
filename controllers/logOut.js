const jwt = require("jsonwebtoken");
require("dotenv").config();
const { getUsers, addRefreshToken } = require("../db/queries");

const handleLogout = async (req, res) => {
  // delete accestoken on client
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  const users = await getUsers();
  const foundUser = users.find(
    (singleUser) => singleUser.refresh_token === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.sendStatus(204);
  }
  //   delete accesstoken on db
  const data = { username: foundUser.username, refreshToken: "" };
  const result = await addRefreshToken(data);
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  }); //secure true
  res.sendStatus(204);
};

module.exports = { handleLogout };
