var express     = require("express");
var app         = express();
var routes      = require('./middleware/test.routes');
var bodyparser  = require('body-parser');
var mongoose    = require('mongoose');
var schema      = mongoose.Schema({
    us: String,
    pa:String
});
var model = mongoose.model('accounts',schema);
mongoose.connect('mongodb://localhost/config', { useUnifiedTopology: true ,useNewUrlParser: true});
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views','./trangejs');
app.listen(5005);
app.get("/ketnoi",(req,res)=>{
    model.find().then(i=>res.json(i))
})
app.post('/postman',(req,res)=>{
    model.create(req.body);


})
var account = [{us:"minh",pa:"123"},{us:"duy",pa:"123"}];
app.get("/test2",(req,res)=>{
    res.render("done.ejs",{account:account});
});
app.post("/test",(req,res)=>{
    var us = req.body.us;
    var pa= req.body.pa;
    account.push(req.body);
    account.forEach(i=>{console.log(i.us)});
    res.redirect("/test2");
}); 
// var abc=  express.Router();
//   abc.get("/b",(req,res)=>{console.log("toi day ok roi");});
// app.use('/a',abc)





