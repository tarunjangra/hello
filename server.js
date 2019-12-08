const express = require("express")
const os = require('os');
const app = express()
app.get("/", function(req, res) {
    res.send("Hello World from server: "+ os.hostname());
})
app.listen(3000)
