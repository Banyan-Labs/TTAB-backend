const router = require("express").Router();
// const UserModel = require("../../../DB/User");


router.route("/").post(async (req, res) => {
    const { time, start, stop, userId } = req.body;

    console.log(time, start, stop)
    if (!time) {
      return res.json({ error: true, message: "time field can not be empty" });
    } else {

        timeModel.findById()
   const newTime = new TimeModel({ time });
      try {
        const newTimeEntry = await newUserTest.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  });

  module.exports = router;
