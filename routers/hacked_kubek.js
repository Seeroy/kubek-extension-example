var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
  res.json("Kubek can be hacked by using unverified extensions!");
});

module.exports = router;