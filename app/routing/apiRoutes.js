var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
  app.post("/api/friends", function(req, res) {
    let match = {
      name: "",
      photoURL: "",
      diffBtwn: 50
    };

    userData = req.body;
    console.log(userData);
    userScore = userData.scores;
    //initialize totalDiff globally
    let totalDiff = 0;
    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDiff = 0;
      for (let j = 0; j < friends[i].scores[j]; j++) {
        totalDiff = Math.abs(
          parseInt(userData.scores[j]) - parseInt(friends[i].scores[j])
        );
        if(totalDiff<=match.diffBtwn){
            match.name=friends[i].name;
            match.photoURL=friends[i].photoURL;
            match.diffBtwn=totalDiff;
        }
      }
    }
    friends.push(userData);
    res.json(match);
  });
};
