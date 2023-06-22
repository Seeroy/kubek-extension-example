var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
  res.json("TEST ROUTER MODULE");
});

module.exports = router;