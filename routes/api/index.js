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
  let Users = [
    {
      firstName: "Josh",
      lastName: "McLain",
      email: "admin@admin.com",
      password: "admin",
    },
    {
      firstName: "Ford",
      lastName: "Prefect",
      email: "hitchicker@hgg.net",
      password: "admin",
    },
    {
      firstName: "Arthur",
      lastName: "Dent",
      email: "test@test.com",
      password: "12345",
    },
  ];

  const { email, password } = req.body;

  if (Users.filter((user) => user.email === email).length != 1) {
    return res.json({ err: true, message: "User not found" });
  } else {
    const matchingUser = Users.filter((user) => user.email == email)[0];
    if (password != matchingUser.password) {
      return res.json({ err: true, message: "Passwords do not match" });
    } else {
      return res.json({
        user: {
          firstName: matchingUser.firstName,
          lastName: matchingUser.lastName,
          email: matchingUser.email,
        },
      });
    }
  }
});

module.exports = router;
