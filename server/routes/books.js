/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var express = require("express");
var router = express.Router();

const db = require("../config/db");

console.log(db.user, db.password);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Books List");
});

module.exports = router;
