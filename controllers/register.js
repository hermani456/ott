const bcrypt = require("bcrypt");
const { getUsers, postNewUser } = require("../queries");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ message: "user and password are require" });
  const allUsers = await getUsers();
  const duplicate = allUsers.find((singleUser) => singleUser.username === user);
  if (duplicate) return res.status(409).json({message: 'username already exist'});
  try {
    const hashedPassword = await bcrypt.hash(pwd, 10);
    const newUser = { username: user, password: hashedPassword };
    const result = await postNewUser(newUser);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
