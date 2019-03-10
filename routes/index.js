// Michael Macari
// Index.js for routes directory

const aboutRoute = require("./about")
const storyRoute = require("./story")
const educationRoute = require("./education")

// Sets up the constructor function
let constructorFunction = (app) => {
    // Sets up about route using about
    app.use("/about", aboutRoute)
    // Sets up story route using story
    app.use("/story", storyRoute)
    // Sets up education route using education
    app.use("/education", educationRoute)

    // All else send 404
    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
      });
};

// Exports our constructor
module.exports = constructorFunction