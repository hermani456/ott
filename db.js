require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
   user: process.env.POSTGRESS_USER,
   host: process.env.POSTGRESS_HOST,
   database: process.env.POSTGRESS_DATABASE,
   password: process.env.POSTGRESS_PASSWORD,
   port: process.env.POSTGRESS_PORT,
})

module.exports = pool;