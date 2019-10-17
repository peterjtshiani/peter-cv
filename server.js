const express = require("express");
const path = require("path");
const app = express();
const data = require("./person");

// calling th name from the json file
// const name = data.name;
// app.get("/", (req, res) => res.json(`Welcome ${name}`));

// creating a static folder which will use all html file inside the folder and display it /...
app.use(express.static(path.join(__dirname, "public")));

// creating an error function when inputed incorrect path
app.get("*", function(req, res, next) {
  let err = new Error("Sorry! Can’t find that resource. Please check your URL");
  err.statusCode = 404;

  next(err);
});

// creating a port that run on  3000 with an exeption
const Port = process.env.Port || 3000;
app.listen(Port, () => console.log(`Server started on port ${Port}`));
