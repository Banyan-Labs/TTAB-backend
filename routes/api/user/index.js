const router = require("express").Router();
const UserModel = require("../../../DB/User");


router.route("/user").post(async (req, res) => {


    const { 
      name,
     avatar,
      email,
      auth0Id
    } = req.body;
    if (!name) {
      return res.json({ error: true, message: "name field can not be empty" });
    } else {
   const newUserTest = new UserModel({ 
     name: name,
    avatar:avatar,
     email: email, 
     auth0Id: auth0Id
    });
  
    console.log(newUserTest, "test")
      try {
        const newUser = await newUserTest.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  });
  

  router.route("/all").get( async (req,res) =>{
    const allUsers = await UserModel.find()
    return res.json({
      users: allUsers
    })
  });
  

module.exports = router;
