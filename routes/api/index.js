const router = require("express").Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "server connection active" }));

router.use('/test', require('./test'));

module.exports = router;
