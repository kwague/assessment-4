module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 

    // function that generates random fortune
    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense", "A hunch is creativity trying to tell you something", "A person is never too old to learn", "A smile is your personal welcome mat", "Allow compassion to guide your decisions", "Believe it can be done", "Love truth, but pardon error"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    }, 
    
    //function that generates various new looks

    getNewLook: (req, res) => {
        const newLook = ["Dye your hair blue", "Get a new piercing", "Get a mohawk", "Get an all pink wardrobe", "Shave off your eyebrows"]

        //choose random new look
        let randomIndex = Math.floor(Math.random() * newLook.length);
        let randomNewLook = newLook[randomIndex]

        res.status(200).send(randomNewLook)
    }, 

    //function with travel ideas

    getTravelling: (req,res) => {
        const places = ["Costa Rica", "South Africa", "Greece", "Saudi Arabia", "Dubai", "Italy"]

        let randomIndex = Math.floor(Math.random() * places.length); 
        let randomPlace = places[randomIndex]

        res.status(200).send(randomPlace)

    },

    //email submission

    postEmail: (req, res) => {
        const { email } = req.body; 
        if (!email) {
            return res.status(400).send('Invalid email address format')
        }

        res.status(500).send('Thank you for subscribing!'); 
    }


}