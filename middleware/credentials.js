require('dotenv').config()

const credentials = (req,res,next)=>{
    const origin = req.headers.origin
    if(process.env.ALLOW_URL.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true)
    }
    next()
}

module.exports = credentials