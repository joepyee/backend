const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const router = express.Router();
const port = process.env.PORT || 4000;

//making api using routes. Look like urls
//GET request to http://localhost:3000/hello

router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      releaseDate: new Date(2011, 9, 22),
      genre: ["electro house"],
    },
    {
      title: "Happy",
      artist: "Pharrell Williams",
      popularity: 10,
      releaseDate: new Date(2013, 11, 21),
      genre: ["soul", "new soul"],
    },
  ];

  res.json(songs);
});
//all request that usually use an api statrt with /api localhost:3000/api/songs
//blah blahfffffff
app.use("/api", router);
app.listen(4000);
console.log("listening");
