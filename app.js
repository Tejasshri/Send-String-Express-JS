const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("express js");
});

app.listen(3000);
module.exports = express;
