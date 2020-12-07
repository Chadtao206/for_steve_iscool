const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/fun/:param1?/:param2/:param3?", ({ params }, res) => {
    console.log(params);
    res.json("you hit this route!")
})

const apiRoutes = require('./routes/api');
app.use(apiRoutes);

// app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));


app.listen(PORT, () => console.log("HI STEVE!"));


//1- git init
//2- git add . git commit ...
//3- heroku create (optional - give a name)
//4- git push heroku master/main/w/e
//debug - heroku logs or heroku logs --tail for livestream of logs