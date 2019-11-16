var express=require("express");
var movierouter=require("./server.js");
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use("/people",movierouter);
app.listen(4000,()=>{
    console.log("server started at port no 4000");
})