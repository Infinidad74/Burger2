var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgersController.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}`));