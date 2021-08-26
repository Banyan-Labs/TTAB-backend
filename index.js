const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello TAB team, and universe!</h1>");
});

app.get("/api", (req, res) => {
  res.json({ message: "test success" });
});

app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
