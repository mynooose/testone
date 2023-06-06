const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req,res) {
    const age = req.body.age;

    res.send("age is : " + age);
})


app.listen(3000, function () {
  console.log("Server is runnig  at Port 3000    .");
})
