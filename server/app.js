let express = require("express");
let app = express();
let cors = require("cors");
let YouTube = require("youtube-node");
require("dotenv").config();
const port = 5000

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


app.get("/search/:keyword", (req, res) => {
  youTube.search(req.params.keyword, 10, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.json(result.items, null, 2);
    }
  });
});

app.listen(port, function () {
  console.log(`Listened on port ${port}!`);
});
