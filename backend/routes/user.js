const express = require("express");
const router = express.Router();

// controller functions
const {
  getAllData,
  signupUser,
  loginUser,
  getAllNots,
  delNots,
  setHier,
  getJuniors,
  getSeniors,
} = require("../controllers/userController");

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// check data
router.route("/data").get(getAllData);
router.route("/data/juniors/:User").get(getJuniors);
router.route("/data/seniors/:User").get(getSeniors);

// get notificions
router.route("/Nots/:User").get(getAllNots).delete(delNots);

//ID requests
router.route("/:User");
// .get(getUser)
// .delete(deleteUser)
router.route("/hier/:User").patch(setHier);

module.exports = router;
