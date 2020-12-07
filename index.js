const express = require("express");
const app = express();
const path = require("path");

app.get("/sayhi/:myname", (req, res) => res.json(`HELLO ${req.params.myname}`));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("HI STEVE!"));