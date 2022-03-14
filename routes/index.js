var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Github Action 101",
    message: "please accept 1 + 1 == 2",
  });
});

module.exports = router;
