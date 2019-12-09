const express = require("express");
const router = express.Router();
const passport = require("passport");
const frontURL = process.env.FRONT_URL;

/*Auth login*/
router.get("/signup", function(req, res) {
  res.render("signup");
});

/*Login out*/
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect(`${frontURL}/`);
});

/*Google login*/
router.get(
  "/google",
  passport.authenticate("google", {
    scope : [ "profile" ]
  })
);

//Callback route for google to redirect to
router.get(
  "/google/redirect",
  passport.authenticate("google"), // Failure triggers the default failure handler (401 Unauthorized)
  (req, res) => {
    // Successful authentication redirects home.
    res.redirect(`${frontURL}/`);
  }
);

router.get("/getUser", (req, res) => res.json(req.user || null));

module.exports = router;
