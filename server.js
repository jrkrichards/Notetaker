const express = require("express");
const app = express();
const PORT = 8000;
const apiRoutes = require("./server/routes/apiRoutes");
const clientRoutes = require("./server/routes/clientRoutes")

// needed to access the url
app.use(express.urlencoded({extended: true}));
// needed to use json
app.use(express.json())

// needed to use static files
app.use("/assets", express.static('./public/assets/'));

app.use("/api", apiRoutes)
app.use("/", clientRoutes)

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))
