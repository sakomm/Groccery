// server 

const express = require('express');
 
const port = process.env.PORT || 3001;

const app = express();


app.listen(port, () => {
    console.log("Sever listining on port: " + port);
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

