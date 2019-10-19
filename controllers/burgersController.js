var router = require("express").Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    // database stuff
    res.render("index");
});

router.post("/api/burger", function (req, res) {
    console.log("req.body: ",req.body);
    burger.create(req.body, function(result) {
        res.json(result);        
    })
})

module.exports = router;