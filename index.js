const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api", (req, res) => {
  res.json({ message: 'if you\'re seeing this message the api server is running' });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "test success" });
});

app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
