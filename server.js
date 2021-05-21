const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/", (req, res)=> res.send("Hello Project"))

// let users = [
//     {id: 1, uersname: "molika", email: "kaka@123.com", password: "12345%"},
//     {id: 1, uersname: "nimout", email: "nimout@123.com", password: "12345"}
// ]

let users = [
    {id:1, username:"Unkow", message: "Hello!, How are you?"},
    {id:2, username:"Unkow", message: "Yes I'm fine"}
]
app.get('/users', (req, res)=>{res.send(users)});

app.post('/users',(req, res)=> {
    user ={
        id: users.length +1,
        username: req.body.username,
        message: req.body.message
    }
    users.push(user);
    res.send(users);
    console.log(req.body);
})