const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .not()
      .isEmpty()
      .withMessage("First name is required"),
    body("fullname.lastname")
      .optional()
      .isString()
      .withMessage("Last name must be a string"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  userController.loginUser
);

router.get("/profile", authUser, userController.getUserProfile);
router.get("/logout", authUser, userController.logoutUser);

module.exports = router;
