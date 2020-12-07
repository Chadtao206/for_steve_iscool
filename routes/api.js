const router = require("express").Router();

    router.get("/sayhi/:myname", (req, res) => res.json(`HELLO ${req.params.myname}`));
    router.post("/login", ({ body: { username, password } }, res) => {
    if (username === "steve" && password === "iscool") {
      return res.json("HELLO WELCOME!")
    } 
        res.json("NEW PHONE WHO DIS")
    });
    
router.route("/api/notes/:id?")
    .get((req, res) => {
        //get function here
    })
    .post((req, res) => {
        //post function here
    })
    .delete((req, res) => {
        
    })

    module.exports = router