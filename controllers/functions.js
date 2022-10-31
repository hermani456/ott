const {
  getOt,
  postOt,
  putOt,
  deleteOt,
  putBot,
  getBot,
  getEntregados,
  getListas,
  move,
  getUsers,
  postNewUser,
} = require("../db/queries");

const otGet = async (req, res) => {
  const result = await getOt();
  res.json(result);
};

const usersGet = async (req, res) => {
  const result = await getUsers();
  res.json(result);
};

const moveTable = async (req, res) => {
  res.json("rows moved");
  move();
};

const listasGet = async (req, res) => {
  const result = await getListas();
  res.json(result);
};

const entregadosGet = async (req, res) => {
  const result = await getEntregados();
  res.json(result);
};

const botGet = async (req, res) => {
  const result = await getBot();
  res.json(result);
};

const newUserPost = async (req, res) => {
  const newUser = req.body;
  const result = await postNewUser(newUser);
  res.json(result);
};

const otPost = async (req, res) => {
  const ot = req.body;
  const uniqueOts = await getOt();
  const singleOt = uniqueOts.map((item) => item.ot);
  if (singleOt.indexOf(ot.ot) === -1) {
    const result = await postOt(ot);
    res.json(result);
  } else {
    res.json({ error: "ot should be unique" });
  }
};

const otPut = async (req, res) => {
  const ot = req.body;
  const result = await putOt(ot);
  res.json(result);
};

const botPut = async (req, res) => {
  const ot = req.body;
  const result = await putBot(ot);
  res.json(result);
};

const otDelete = async (req, res) => {
  const ot = req.body;
  const result = await deleteOt(ot);
  res.json(result);
};

module.exports = {
  otGet,
  otPost,
  otPut,
  otDelete,
  botPut,
  botGet,
  entregadosGet,
  listasGet,
  moveTable,
  usersGet,
  newUserPost
};
