// var http = require("http");
// var url  = require("url");
//  var queryString = require("querystring")

// function onRequest(req,res){
 
//     var path = url.parse(req.url).pathname;

//     // console.log("Request for" + path + " received");
//     console.log("Path : " +path);

//     var query = url.parse(req.url).query;

//     console.log("Qeury String :  "+ query);

//     var name = queryString.parse(query)["username"];
//     var email =  queryString.parse(query)["email"];

//     // {
//     //     username:"Ana",
//     //     email:"ana@gamil.com"
//     // }

//     res.write("<h1>Hello "+name+"</h1>");

//     res.write("<h2> Your email is "+ email+ "registered successfully ");
//     res.end();


// }

// http.createServer(onRequest).listen(8000);
// console.log("server listineng to port 8000")

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
