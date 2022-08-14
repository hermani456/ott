const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const { otGet, otPost, otPut, otDelete, botPut, botGet } = require('./functions')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
	res.json({ Hello: 'World' })
})

app.get('/api/v1', otGet)
app.post('/api/v1', otPost)
app.put('/api/v1', otPut)
app.delete('/api/v1', otDelete)
app.put('/api/v1/bot', botPut)
app.get('/api/v1/bot', botGet)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
