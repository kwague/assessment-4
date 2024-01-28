const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);

// creating route that runs getFortune
app.get("/api/fortune", controller.getFortune);

//creating route that runs getNewLook
api.get("/api/newlook", controller.getNewLook);

//creating route that runs getTravelling
api.get("/api/travel", controller.getTravelling);

//route for email submission
app.post('/api/submit-email', controller.postEmail)

app.listen(4000, () => console.log("Server running on 4000"));
