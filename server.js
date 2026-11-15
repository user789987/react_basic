





var http = require("http");
var queryString = require("querystring");

http.createServer(function(req,res){
    var data1="";
    req.on("data",function(chunk){
        data1+=chunk;
    })

    req.on("end",function(){
    var qs=queryString.parse(data1);
    var name = qs["username"];
    var email =  qs["email"];
     res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello " + name + ",</h1>");
    res.write("<h2>Your Email " + email + " Registered Successfully</h2>");
    res.end();


    })

}).listen(8000);
console.log("Server is Running on port 8000");
