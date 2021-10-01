const router = require("express").Router();
const UserModel = require("../../../models/User");
const userController = require('../../../controller/userController');

router.route("/").post(async (req, res) => {
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
});

router.route("/all").get(async (req, res) => {
  const allUsers = await UserModel.find();
  return res.json({
    users: allUsers,
  });
});

router.route('/test').post(userController.post)

module.exports = router;
