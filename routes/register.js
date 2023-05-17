var express = require('express');
var router = express.Router();
var register = require('../Models/register')

/* GET home page. */
router.post('/', async function (req, res, next) {
    try {
        console.log(req.body);
        data = await register.create(req.body)
        res.status(201).json({
            status: 'success',
            data
        })
    }
    catch (error) {
        console.log(error)
    }
});

module.exports = router;
