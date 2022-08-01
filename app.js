const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const { otGet, otPost, otPut, otDelete } = require('./functions')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', otGet)
app.post('/', otPost)
app.put('/', otPut)
app.delete('/', otDelete)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
