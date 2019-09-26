var express = require('express');
var routes = express.Router();
routes.get('/testrouter1',(req,res)=>{res.render('test.ejs')});
module.exports = routes;