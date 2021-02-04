var express = require("express");
var router = express.Router();


/* GET new message form page. */
router.get("/", function (req, res, next) {
  res.render("new", { title: "Mini Message Board" });
});

module.exports = router;