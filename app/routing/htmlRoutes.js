const express = require('express');
const router = express.Router();
var path = require('path');

//GET request to default Home Page
router.get("/",  function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//GET request to the survey page
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
