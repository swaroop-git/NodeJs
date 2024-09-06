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

// p1 = Promise.resolve(50);
// p2 = 200
// p3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'geek');
// });

// Promise.all([p1, p2, p3]).then(function (values) {
//     console.log(values);
// }); 

// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values);
// })


// const one = setTimeout(() => {
//     console.log('hello in 5 second');
// }, 100);

// const two = setTimeout(() => {
//     console.log('hello in 10 second');
// }, 50);

// Promise.all([one, two]).then(function(values){
//     console.log(values);
// })

/* ************************************************************************************************ */

// print hello after 5 sec
// print hello after 10 sec 
// using only one function 

// method setTimeout ( function, milliseconds, string) ------> delay an operation
// method setInterval(function, milliseconds, param1, param2, ...)

const myfunc = delay => {
    console.log('hello ' + delay + ' seconds');
}

setTimeout(myfunc , 50, 'five');
setTimeout(myfunc, 100, 'Ten');
