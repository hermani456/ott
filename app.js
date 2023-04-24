const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logger");
const credentials = require("./middleware/credentials");
const port = process.env.PORT || 5000;
const {
  entregadosGet,
  listasGet,
  adjudicacionGet,
  botPut2,
} = require("./controllers/functions");
const { verifyJwt } = require("./middleware/verifyJwt");
const cookieParser = require("cookie-parser");
const queryAndUpdate = require("./updateApi");
const queryAndUpdate2 = require("./updateApi2");

app.use(logger);
app.use(credentials);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

// app.use(verifyJwt); //requires jwt auth
app.use("/api/v1", require("./routes/api"));
app.use("/api/v2", require("./routes/api2"));

app.get("/api/v1/entregados", entregadosGet);
app.get("/api/v1/listas", listasGet);
app.get("/api/v1/adjudicacion", adjudicacionGet);
app.put("/api/v1/botPut2", botPut2);

queryAndUpdate();
queryAndUpdate2();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
