const router = require("express").Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "server connection active" }));

router
  .route("/test")
  .get((req, res) => res.json({ message: "test get response successful" }))
  .post((req, res) =>
    res.json({
      message: "test post response successful",
      body: req.body,
    })
  );

router.route("/test/login").post((req, res) => {
    const data = require("./mockData/mockData.json");
    const parsedData = JSON.parse(data);
    const user = parsedData.filter((user) => user.email === req.body.email && user.password === req.body.password);
    return user[0] ? res.json({
        message: "response successful",
        body: req.body,
      })
    : "User doesn't exsist";
});

module.exports = router;
