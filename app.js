const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logger");
const credentials = require("./middleware/credentials");
const port = process.env.PORT || 5000;
const { entregadosGet, listasGet } = require("./controllers/functions");
const { verifyJwt } = require("./middleware/verifyJwt");
const cookieParser = require("cookie-parser");
const queryAndUpdate = require("./updateApi");

app.use(logger);
app.use(credentials);

app.use(cors(corsOptions));
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

// app.use(verifyJwt);
app.use("/api/v1", require("./routes/api"));

app.get("/api/v1/entregados", entregadosGet);
app.get("/api/v1/listas", listasGet);

queryAndUpdate();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
