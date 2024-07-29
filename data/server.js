const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res, next) => {
    res.status(200).json("The server is working");
    //if(topic) {} else {next("no topic")} //or something like that
});

server.listen(9000, () => console.log("Server running on port 9000"));

