const axios = require("axios");
const cron = require("node-cron");
require("dotenv").config();
const { getBot2, putBot2, move2 } = require("./db/queries");

const everyMinute = "* * * * *";
const everyDayAt7AM = "0 7 * * *";
const every2Hours = "0 */2 * * *";

const queryAndUpdate2 = () => {
  cron.schedule(everyDayAt7AM, async () => {
    console.log("holi D:", new Date());
    const url = process.env.QUERY_URL2;

    const postData = async (url, cara) => {
      try {
        const { data } = await axios.post(url, cara);
        if (data.includes("LISTA PARA RETIRO")) {
          return "LISTA";
        } else if (data.includes("INSCRIPCION")) {
          return "INSCRIPCION";
        } else if (data.includes("CAJA")) {
          return "CAJA";
        } else {
          return "NO_DATA";
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAndUpdate = async () => {
      try {
        const arrayData = [];
        const data = await getBot2();
        data.map(async (item) => {
          const { caratula } = item;
          const data = `caratula=${caratula}`;
          arrayData.push(data);
        });

        arrayData.forEach(async (e, index) => {
          setTimeout(async () => {
            const estado = await postData(url, e);
            const caratula = e.split("=")[1];
            await putBot2({ caratula, estado });
          }, 100 * index);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAndUpdate();
    setTimeout(() => {
      move2();
    }, 5000);
  });
};

queryAndUpdate2();

module.exports = queryAndUpdate2;
