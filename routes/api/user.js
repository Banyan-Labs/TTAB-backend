const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/").post(userController.findOneCreateOne).get(userController.getAll)

module.exports = router;
