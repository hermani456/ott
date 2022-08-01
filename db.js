require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
   databaseurl: process.env.DATABASE_URL,
   user: process.env.PGUSER,
   host: process.env.PGHOST,
   database: process.env.PGDATABASE,
   password: process.env.PGPASSWORD,
   port: process.env.PGPORT,
})

// const pool = new Pool({
//    user: process.env.POSTGRESS_USER,
//    host: process.env.POSTGRESS_HOST,
//    database: process.env.POSTGRESS_DATABASE,
//    password: process.env.POSTGRESS_PASSWORD,
//    port: process.env.POSTGRESS_PORT,
//    sslmode: process.env.POSTGRESS_SSLMODE,
// })

module.exports = pool;