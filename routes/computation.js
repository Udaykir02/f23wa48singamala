var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    var x = Math.random()
    var z = Math.random()
    sin = Math.sin(x);
    cosh= Math.cosh(x)
    y = Math.floor(sin);
    res.send("Math.sin() applied to "+x+" is "+sin +"<br></br>"+"Math.cosh() applied to "+x+" is "+cosh+"<br></br>"+
                "Math.floor() applied to "+sin+" is "+y);
});

module.exports = router;