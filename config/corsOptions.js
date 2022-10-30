require('dotenv').config()

const whiteList = process.env.ALLOW_URL;
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("not allow by cors"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions
