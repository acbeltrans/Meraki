var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

/* router.post("/eventbrite", (req, res) => {
  res.redirect(
    "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=5VNMTHNMAGLAEEY5FKM4&redirect_uri=https://dard9811.github.io/Homepage-Daniel-Ramirez/index.html"
  );
}); */

module.exports = router;
