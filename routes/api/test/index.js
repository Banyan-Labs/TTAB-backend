const router = require("express").Router();
const formatData = require("../../../utils/formatMockTimeEntries");
const UserModel = require("../../../models/User");

router
  .route("/")
  .get((req, res) => res.json({ message: "test get response successful" }))
  .post((req, res) =>
    res.json({
      message: "test post response successful",
      body: req.body,
    })
  );

router
  .route("/user")
  .post(async (req, res) => {
    const { name, avatar, email, auth0Id } = req.body;
    if (!name) {
      return res.json({ error: true, message: "name field can not be empty" });
    } else {
      const newUserTest = new UserModel({
        name,
        avatar,
        email,
        auth0Id,
      });

      console.log(newUserTest, "test");
      try {
        const newUser = await newUserTest.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  })
  .get(async (req, res) => {
    const allUsers = await UserModel.find();
    return res.json({
      users: allUsers,
    });
  });

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

router.route("/time-entries/:userId").get((req, res) => {
  const { userId } = req.params;
  const MockCollection = require("../../../mockData.json").fakeTimeEntries;
  const findAllBy = (userId) =>
    MockCollection.filter((entry) => entry.userId === userId);
  const userTimeEntries = findAllBy(userId);
  return res.json({ timeEntries: formatData(userTimeEntries) });
});

module.exports = router;
