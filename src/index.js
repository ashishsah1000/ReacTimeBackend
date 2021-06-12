// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const express = require("express");
const app = express();

// intializing mongoose
const mongo = require("mongoose");
const port = 3000;

app.listen(port, () => {
  console.log(`listing at the port:${port}`);
});
const db =
  "mongodb+srv://flekenstine:weakpassword@time.kz7qk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongo.connect(db, (err) => {
  if (err) console.log(err);
  else console.log("Connection Successfull");
});
app.get("/", (req, res) => {
  res.send("hellow Wor");
});
