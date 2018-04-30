//dependencies---------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//configure Express and initialize PORT--------
var app = express();
var PORT = process.env.PORT || 3000;

//set up Express to handle data parsing--------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen for activity on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
