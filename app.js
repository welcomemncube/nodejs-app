const express = require("express");
const app = express();
const PORT = process.env.PORT | 3000

app.get("/", (req,res) => {
  res.send("This is the Home page");
});
app.get("/About", (req, res) => {
  res.send("This is the About page");
});
app.get("/Contact", (req, res) => {
    res.send("This is the Contact page");
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});