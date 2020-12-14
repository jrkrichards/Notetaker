const router = require("express").Router();
const fs = require("fs");

// Allowing the client to access specific data
const dbInfo = fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log("api side hit")
    console.log(JSON.parse(data));
  });

// // Allowing the client to access specific data
// router.get("/", (req, res) => {
//     console.log("we have been hit")
//     fs.readFile("../db/db.json", "utf8", (err,data) => {
//         if(err) throw err;
//         console.log(res.json(JSON.parse(data)));
//     });
// });

module.exports = router