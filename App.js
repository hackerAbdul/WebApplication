// load app server....
const express = require('express');
const app = express();
const morgan = require('morgan');



app.use(morgan('short'))


app.use((req,res,next) => {
    res.status(200).json({
        message: "It works!"
    })
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from backend")
})

// app.get("/users", (req, res) =>{
//     var user1 = {firstName: "Michael", lastName: "Jackson"}
//     const user2 = {firstName: "Kevin", lastName: "Durant"}
//     res.json([user1, user2])
//     //res.send("nodemon auto update when i save files")
// })

module.exports = app;