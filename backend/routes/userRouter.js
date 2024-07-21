const { signupUser, loginUser } = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;