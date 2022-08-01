const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const { otGet, otPost, otPut, otDelete } = require('./functions')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hola', (req, res) => {
	res.send('Hello World!')
})
// asd
app.get('/api/v1', otGet)
app.post('/api/v1', otPost)
app.put('/api/v1', otPut)
app.delete('/api/v1', otDelete)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
