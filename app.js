const express = require("express");
const app = express();
app.listen(process.env.PORT || 5000,() => {
    console.log("SERVER IS RUNNING...")
})
app.get("/" , (req , res) =>{
    res.send("SUCCESS HOSTING!!!")
})