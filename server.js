const express = require("express");
const app = express();


app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/", (req, res)=> res.send("Hello Project"))

let users = [
    {id: 1, username: "Molika", password: "123"},
    {id: 2, username: "Nimout", password: "123"},
    {is: 3, username: "Kanha", password: "123"}
]
app.get("/users", (req, res) => res.send(users));


app.get("/users", (req, res)=>{
    let user = req.body;
    res.send(users)
})