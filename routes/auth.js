const express = require("express");
const router = express.Router();
const passport = require("passport");
const frontURL = "http://localhost:3000";

/*Auth login*/
router.get("/signup", function(req, res) {
	res.render("signup");
});

/*Login out*/
router.get("/logout", function(req, res) {
	res.send("login out");
});

/*Google login*/
router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile"]
	})
);

//Callback route for google to redirect to
router.get(
	"/google/redirect",
	passport.authenticate("google"), // Failure triggers the default failure handler (401 Unauthorized)
	(req, res) => {
		// Successful authentication redirects home.
		res.send(req.user);
		//res.redirect(`${frontURL}/`);
	}
);

module.exports = router;
