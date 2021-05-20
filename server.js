const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/", (req, res)=> res.send("Hello Project"))

app.post('/user', (req, res)=>{
    let user = req.body;
    res.send(user)
})