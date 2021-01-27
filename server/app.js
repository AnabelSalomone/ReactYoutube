let express = require("express");
let app = express();
let cors = require("cors");
let YouTube = require("youtube-node");
require("dotenv").config();

app.use(cors());

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: error.message,
  });
});


let youTube = new YouTube();
const ytKey = process.env.YT_KEY
youTube.setKey(ytKey);


app.get("/", (req, res) => {
  res.send("HelloWorld!")
});

app.listen(5000, function () {
  console.log("Listened on port 5000!");
});
