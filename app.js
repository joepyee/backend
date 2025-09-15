const express = require("express");
const app = express();

//start web server
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
//making api using routes. Look like urls
//GET request to http://localhost:3000/hello
