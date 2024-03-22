const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
app.get("/", (req, res) => {
  res.send("Hi world is this sample testing response");
});
app.listen(9000, () => {
  console.log("Server is running in port 9000");
});
