const { getOt, postOt, putOt, deleteOt, putBot } = require('./queries')

const otGet = async (req, res) => {
	const result = await getOt()
	res.json(result)
}

const otPost = async (req, res) => {
	const ot = req.body
	const result = await postOt(ot)
	res.json(result)
}

const otPut = async (req, res) => {
	const ot = req.body
	const result = await putOt(ot)
	res.json(result)
}

const botPut = async (req, res) => {
	const ot = req.body
	const result = await putBot(ot)
	res.json(result)
}

const otDelete = async (req, res) => {
	const ot = req.body
	const result = await deleteOt(ot)
	res.json(result)
}

module.exports = { otGet, otPost, otPut, otDelete, botPut }
