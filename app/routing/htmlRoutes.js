var path = require("path");

module.exports = function (app){
    app.get("/", function(req,res){
        // console.log(__dirName);
        res.sendFile(path.join(__dirname,"../public/home.html"))
    });

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    });
//default route to home page
    // app.get("/*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "./app/public/home.html"));
    //   });
}