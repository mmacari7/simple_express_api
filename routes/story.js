// Michael Macari
// Story Route

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    // Try to get info
    try{
        const storyJson = {
            "storyTitle": "The Bunny",
            
            "story": "Once upon a time there was a little bunny. This however was no ordinary bunny. This bunny was a fairy! This little fairy bunny was frolocking about in a vast meadow of sunflowers. This fairy bunny's name was Alexandria, and she was able to hop in addition to fly from flower to flower, using her bunny magic to help them grow even taller and stronger (kind of like bees).\n One day Alexandria was taking a snooze on top of one of the flowers, when a mighty centuar came along. The centuar, huge in comparison to Alexandria was holding up a long sword, in addition to a bow and flaming arrow. Alexandria knew this was no ordinary centuar, this centuar was out to burn her flower field. Skeptical and afraid she knew that she had no choice but to act, as the centuar was threatening her very home, and her peoples primary food source! She mustered up the courage and approached the centuar.\n The centuar now standing mighty and strong before Alexandria, was lost in a gaze amongst the field. Alexandria attempted communicating with the centuar but it was of no use. The centuar spoke a language that she did not know. The centuar then raised his bow and arrow, ready to fire onto the field. Alexandria knew she had to act and fast! She flew up from the flowers below the centuar, and before the centuar could even look down to see what was going on, she let out a gust of magic that turned the centuar into a bee! Now a bee, the new bee centuar began to do what bees do, and pollinate all of the flowers. This was a win win because now the centuar was not threatening Alexandria's flowers, but instead helping to grow them big and strong along side her. They were friends from that day forward. The end."
        }
        res.json(storyJson)
    }
    // If not send error
    catch(e){
        res.status(500).send()
    }
});

// Exports the router
module.exports = router