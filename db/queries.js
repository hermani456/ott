const pool = require("./db");

const getOt = async () => {
  const query = `SELECT * FROM ot`;
  const result = await pool.query(query);
  return result.rows;
};

const getUsers = async () => {
  const query = "SELECT * FROM usersDB";
  const result = await pool.query(query);
  return result.rows;
};

const postNewUser = async (newUser) => {
  const query =
    "INSERT INTO usersdb (username, password, roles) VALUES($1, $2, $3) RETURNING *";
  const values = [newUser.username, newUser.password, newUser.roles];
  const result = await pool.query(query, values);
  return result.rows;
};

const addRefreshToken = async (data) => {
  const query = `UPDATE usersdb SET refresh_token = $2 WHERE username = $1`;
  const values = [data.username, data.refreshToken];
  const result = await pool.query(query, values);
  return result.rows;
};

const move = async () => {
  const query = `with luti as (
      delete from ot where estado = 'ENTREGADO'
      returning *
    )
    insert into entregados
    select * from luti;`;
  const result = await pool.query(query);
};

const getListas = async () => {
  const query = `SELECT * FROM ot WHERE estado = 'LISTO'`;
  const result = await pool.query(query);
  return result.rows;
};

const getEntregados = async () => {
  const query = "SELECT * FROM entregados";
  const result = await pool.query(query);
  return result.rows;
};

const getBot = async () => {
  const query = `SELECT ot, rut FROM ot`;
  const result = await pool.query(query);
  return result.rows;
};

const postOt = async (ot) => {
  const query = `INSERT INTO ot (ot, referencia, tipo_documento, fecha_ingreso, fecha_entrega, estado, observaciones, rut) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const values = [
    ot.ot,
    ot.referencia,
    ot.tipo_documento,
    ot.fecha_ingreso,
    ot.fecha_entrega,
    ot.estado,
    ot.observaciones,
    ot.rut,
  ];
  const result = await pool.query(query, values);
  return result.rows;
};

const putOt = async (ot) => {
  const query = `UPDATE ot SET ot = $1, fecha_entrega = $2, estado = $3, observaciones = $4 WHERE ot = $1 RETURNING *`;
  const values = [ot.ot, ot.fecha_entrega, ot.estado, ot.observaciones];
  const result = await pool.query(query, values);
  return result.rows;
};

const putBot = async (ot) => {
  const query = `UPDATE ot SET ot = $1, estado = $2 WHERE ot = $1 RETURNING *`;
  const values = [ot.ot, ot.estado];
  const result = await pool.query(query, values);
  return result.rows;
};

const deleteOt = async (ot) => {
  const query = `DELETE FROM ot WHERE ot = $1 RETURNING *`;
  const values = [ot.ot];
  const result = await pool.query(query, values);
  return result.rows;
};

module.exports = {
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
  addRefreshToken,
};
