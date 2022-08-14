require('dotenv').config()
const { Pool } = require('pg')

// const pool = new Pool({
//    user: 'postgres',
//    host: 'containers-us-west-89.railway.app',
//    database: 'railway',
//    password: '29um36Zy5I75VBDTfJuN',
//    port: '5614'
// })

const pool = new Pool({
   user: process.env.POSTGRESS_USER,
   host: process.env.POSTGRESS_HOST,
   database: process.env.POSTGRESS_DATABASE,
   password: process.env.POSTGRESS_PASSWORD,
   port: process.env.POSTGRESS_PORT,
})

module.exports = pool;