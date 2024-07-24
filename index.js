// import express from "express";

const express = require('express');   //import express dependency

const app = express();      //initiate express app 
const port = 5000;          // save the port number where you will be listening

//Routes HTTP GET requests to the specified path with the specified callback functions
app.get('/', function (req,res) {
    // res.send('GET request to homepage');
    res.sendFile('index.html', {root: __dirname});   // server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file
});

app.listen(port, () => {
    console.log(`Now listening on ${port}`);
});