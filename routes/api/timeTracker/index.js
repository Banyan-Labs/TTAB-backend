router.route("/").post(async (req, res) => {
    const { name } = req.body;

    console.log(name)
    if (!name) {
      return res.json({ error: true, message: "name field can not be empty" });
    } else {
   const newUserTest = new UserModel({ name });
      try {
        const newUser = await newUserTest.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  }).get( async (req,res) =>{
    const allUsers = await UserModel.find()
    return res.json({
      users: allUsers
    })
  });