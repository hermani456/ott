const axios = require("axios");
const cron = require("node-cron");
require("dotenv").config();
const { getBot, putBot, move } = require("./db/queries");

const everyMinute = "* * * * *";
const everyDayAt7AM = "0 7 * * *";
const every2Hours = "0 */2 * * *";

const queryAndUpdate = () => {
  cron.schedule(every2Hours, async () => {
    console.log("task ran at", new Date());
    const url = process.env.QUERY_URL;

    const postData = async (url, info) => {
      try {
        const { data } = await axios.post(url, info);
        if (data.includes("EN PROCESO")) {
          return "EN PROCESO";
        } else if (data.includes("ENVIADO AL CLIENTE")) {
          return "ENTREGADO";
        } else if (data.includes("RECHAZADO")) {
          return "RECHAZADO";
        } else if (data.includes("LISTO")) {
          return "LISTO";
        } else if (data.includes("OT NO ENCONTRADA")) {
          return "OT/RUT INCORRECTOS";
        } else if (data.includes("ANULADO")) {
          return "ANULADO";
        } else if (data.includes("RETIRADO")) {
          return "RETIRADO PARA CORRECCION";
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getAndUpdate = async () => {
      try {
        const arrayData = [];
        const data = await getBot();
        data.map(async (item) => {
          const { ot, rut } = item;
          const data = `ot=${ot}&rut=${rut}`;
          arrayData.push(data);
        });
        arrayData.forEach(async (e) => {
          const estado = await postData(url, e);
          const ot = e.split("=")[1].slice(0, -4);
          await putBot({ ot, estado });
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAndUpdate();
    setTimeout(() => {
      move();
    }, 5000);
  });
};

module.exports = queryAndUpdate;
