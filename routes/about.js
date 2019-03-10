// Michael Macari
// About Route

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    // Try to get info
    try{
        // JSON Data to be served to about page
        const aboutJson = {
            "name": "Michael Macari",
            
            "cwid": "10432224",
            
            "biography": "My name is Michael Macari. I am a masters student in computer science at Stevens institute of technology. I am also a full time research engineer for the STAR center at Stevens Institute of Technology under Hady Salloum. I am currently working on the development of a portable light weight software defined radio platform integrated with with machine learning for an eager approach to unmanned aerial systems signal classification. Apart from my career in software development, I try to keep busy with an active lifestyle.\n I absolutely love board sports. During the winter time snowboarding is one of my favorites, and in the summer I try to surf whenever I get the opportunity. I try to uphold to a healthy lifestyle through physical fitness and a healthy diet. When I am not snowboarding, surfing or working, you can typically find me outside in the sun reading science fiction novels. One of my favorite books is: Surely you're Joking Mr. Feynman. The book is a hilarious intillectual read through the life of Richard P Feynman, a nobel prize winner with a curious mind who worked on the manhattan project with a hand full of other well known geniuses. Don't take my word for it though, give it a read!",
            
            "favoriteShows": ["Game of Thrones", "Shameless", "Punisher", "Black Mirror", "Vikings"],
            
            "hobbies": ["Lifting", "Snowboarding", "Surfing", "Reading", "Playing Chess", "Socializing"]
        }
        res.json(aboutJson)
    }
    // If not send error 500
    catch(e){
        res.status(500).send()
    }
});

// Exports the router
module.exports = router