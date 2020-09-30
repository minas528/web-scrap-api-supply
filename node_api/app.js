const express = require("express");
const app = express();
const  mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routeCourses = require('./routes/whisky');


// Middleware
app.use("/api/whisky", routeCourses);
app.get("/", (req, res) => {
    res.send("Welcome to express node.js tutorial");
});

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true,
    useUnifiedTopology: true}, () => 
    console.log("connected to database!")    
);

const PORT = process.env.PORT || 5000;
d = Date.now()

app.listen(PORT,() => console.log(`Listening to port ${PORT} ${d}`));