require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
   user: process.env.POSTGRESS_USER,
   host: process.env.POSTGRESS_HOST,
   database: process.env.POSTGRESS_DATABASE,
   password: process.env.POSTGRESS_PASSWORD,
   port: process.env.POSTGRESS_PORT,
   sslmode: process.env.POSTGRESS_SSLMODE,
})

module.exports = pool;