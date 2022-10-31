const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logger')
const port = process.env.PORT || 5000
const { entregadosGet, listasGet, moveTable } = require('./controllers/functions')
const {verifyJwt} = require('./middleware/verifyJwt')

app.use(logger)

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
	res.json({ Hello: 'World' })
})

app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))

app.use('/api/v1', require('./routes/api'))
app.use('/api/v1/bot', require('./routes/api'))

app.get('/api/v1/entregados', entregadosGet)
app.get('/api/v1/listas', listasGet)
app.get('/api/v1/move', moveTable)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
