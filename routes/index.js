var express = require("express");
var router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

// Add new message from form entry data
router.post("/new", (req, res, next) => {
  console.log(req.body);
  const { name, text } = req.body;
  messages.push({
    user: name,
    text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
