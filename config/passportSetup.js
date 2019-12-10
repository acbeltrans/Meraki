const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();
require("dotenv").config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/redirect"
		},
		(accessToken, refreshToken, profile, done) => {
			let userName = profile.displayName;
			let googleId = profile.id;
			let gender = profile.gender;
			let name = profile._json.name;
			let profilePicture = profile._json.picture;

			let newUser = {
				userName: userName,
				googleId: googleId,
				gender: gender,
				name: name,
				profilePicture: profilePicture
			};

			myMongoLib
				.postUser(newUser)
				.then(doc => {
					console.log("usuario creado ", newUser);
					done(null, newUser);
				})
				.catch(err => {
					console.log("err in post User: ", err);
				});
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
