const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(request , response){
    response.sendFile("D:/html bootcamp/calculator/index.html");
});

app.post("/", function(request, response){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var res = num1 + num2 ;
    response.send("your answer is :"+res);
});

app.get("/bmicalculator", function(request , response){
    response.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator", function(request, response){
    var n1 = Number(request.body.n1);
    var n2 = Number(request.body. n2);
    var res = n2/(n1*n1);
    response.send("Your BMI is :"+ res);
});
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});