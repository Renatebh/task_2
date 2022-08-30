const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
