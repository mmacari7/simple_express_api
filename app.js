// Michael Macari
// Simple express
const express = require("express")
const app = express()
const configRoutes = require("./routes")

// Passes the express app to our constructor
configRoutes(app)

app.listen(3000, () => {
    console.log("Listening on port 3000")
});
