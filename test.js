var express = require('express');
var app = express();
var fs = require("fs");

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get('/students', function (req, res) {

  fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
     res.end( data );
  });
})

app.use(express.static(__dirname));

app.get("/busbooking", (req, res) => {
  res.sendFile(__dirname + "/busbooking.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});