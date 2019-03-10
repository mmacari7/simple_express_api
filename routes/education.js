// Michael Macari
// Education Route

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    // Try to get info
    try{
        const educationJson = [
            {
                "schoolName": "Stevens Institute of Technology",
                "degree": "Masters of Science in Computer Science",
                "favoriteClass": "Web Programming of course! :)",
                "favoriteMemory": "Creating a unique ground truth embedded systems device."
            },
            
            {
                "schoolName": "SUNY New Paltz",
                "degree": "Bachelors of Science in Electrical Engineering",
                "favoriteClass": "C/C++",
                "favoriteMemory": "My friend trying to get pushed home by a snow plow."
            },

            {
                "schoolName": "Centereach High School",
                "degree": "High School Diploma",
                "favoriteClass": "AP Bio",
                "favoriteMemory": "My AP Bio teacher setting the classroom floor on fire trying to show us how to launch a bottle like a rocket with ethenol. He was a pretty a fun guy."
            }
        ]
        res.json(educationJson)
    }
    // Otherwise send error
    catch(e){
        res.status(500).send()
    }
});

// Exports the router
module.exports = router