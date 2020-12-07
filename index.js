const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/sayhi/:myname", (req, res) => res.json(`HELLO ${req.params.myname}`));
app.post("/login", ({ username, password }, res) => {
    if (username === "steve" && password === "iscool") {
        res.json("HELLO WELCOME!").end();
    }
    res.json("NEW PHONE WHO DIS")
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));


app.listen(PORT, () => console.log("HI STEVE!"));