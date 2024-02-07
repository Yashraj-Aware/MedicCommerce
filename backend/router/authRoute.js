const express = require("express");
const { registerController, loginController, testController } = require("../controllers/authController");
const {isAdmin, requireSignIn} = require("../middleware/authMiddleware")

// router object
const router = express.Router();

//register route
router.post("/register", registerController);

//login route
router.post("/login", loginController);


//testing middleware routes
router.post("/test",requireSignIn,testController)



module.exports =  router;
