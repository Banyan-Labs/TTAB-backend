if(process.env.NODE !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes'));
// base route delivers landing page for server
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});


app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
