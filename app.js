const express = require("express");
const {readFileSync} = require("fs");
const app = express();
app.listen(process.env.PORT || 5000,() => {
    console.log("SERVER IS RUNNING...")
})
app.get("/" , (req , res) =>{
    res.send("SUCCESS HOSTING!!!")
})

app.get("/user" , (req ,res) => {
    let user = JSON.parse(readFileSync("users.json"));
    res.send(user);
});