const router = require("express").Router();
const fs = require("fs");

// Allowing the client to access specific data
const dbInfo = fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });

// Allowing the client to access specific data
router.get("/notes", (req, res) => {
    console.log("we have been hit")
    fs.readFile("../db/db.json", "utf8", (err,data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

// post new notes
router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("../db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        const allNotes = JSON.parse(data);
        console.log("viewing the body from push")
        console.log(req.body)
        allNotes.push({
            title: req.body.title,
            text: req.body.text,
        })
        console.log("viewing the new db")
        console.log(allNotes)

        fs.writeFile("../db/db.json", JSON.stringify(allNotes), (err) => {
            if(err) throw err;
            res.json({
                msg: "success fully added"
            })
        })
    });
})

module.exports = router