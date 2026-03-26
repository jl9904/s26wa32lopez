var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {

    let x = Math.random() * 100;
    let y = Math.round(x);

    res.send(`Math.round() applied to ${x} is ${y}`);
});

module.exports = router;
