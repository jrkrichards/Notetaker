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
// router.post("/characters/new", (req, res) => {
//     console.log(req.body);
//     fs.readFile("./data.json", "utf8", (err, data) => {
//         if(err) throw err;
//         const allCharacters = JSON.parse(data);
//         console.log(req.body)
//         allCharacters.push({
//             routeName: req.body.routeName,
//             name: req.body.name,
//             role: req.body.role,
//             age: parseInt(req.body.age),
//             forcePoints: parseInt(req.body.forcePoints)
//         })
//         console.log(allCharacters)

//         fs.writeFile("./data.json", JSON.stringify(allCharacters), (err) => {
//             if(err) throw err;
//             res.json({
//                 msg: "success fully added"
//             })
//         })
//     });
// })

module.exports = router