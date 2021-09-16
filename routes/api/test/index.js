const router = require('express').Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "test get response successful" }))
  .post((req, res) =>
    res.json({
      message: "test post response successful",
      body: req.body,
    })
  );

router.route("/login").post((req, res) => {
  const data = require("../../../mockData.json").fakeUserProfiles;
  const user = data.filter((user) => user.email === req.body.email)[0];

  if (!user) {
    return res.json({ error: true, message: "user does not exists" });
  } else if (user.password != req.body.password) {
    return res.json({ error: true, message: "password does not match" });
  } else {
    return res.json({
      user: {
        userId: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }
});

router.route("/timeData/:userId").get((req, res) => {
  const Time = require("../../../mockData.json").fakeTimeEntries;
  const { userId } = req.params;

  const userTimeEntries = Time.filter((entry) => entry.userId == userId);

  return res.json({ timeEntries: userTimeEntries });
});

module.exports = router;