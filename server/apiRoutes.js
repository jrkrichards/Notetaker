const router = require("express").Router();
const fs = require("fs");

// Viewing current notes in db
const dbInfo = fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });

// Allowing the client to access specific data
router.get("/notes", (req, res) => {
    console.log("we have been hit")
    fs.readFile("./db/db.json", "utf8", (err,data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

// post new notes
router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        const allNotes = JSON.parse(data);
        allNotes.push({
            title: req.body.title,
            text: req.body.text,
        })

        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
            if(err) throw err;
            res.json({
                msg: "success fully added"
            })
        })
    });
})

// delete notes
router.get("/notes/:routename", (req, res) => {
    console.log("attempting to delete")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        const allNotes = JSON.parse(data);
        const deleteNoteKey = req.params.routename
        delete allNotes.deleteNoteKey

        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
            if(err) throw err;
            res.json({
                msg: "success note deleted"
            })
        })
        return res.json({
            msg: "the note you are trying to delete does not exist",
            error: `attempted route: ${req.params.routename}`,
          });
    });
})

module.exports = router