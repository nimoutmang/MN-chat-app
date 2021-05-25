const express = require("express");
const app = express();


app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.get("/", (req, res)=> res.send("Hello Project"))

let users = [
    {id:1, username:"Molika", password: "123", color: "pink", message: "Hello!, How are you?", time:"11:23:01"},
    {id:2, username:"Nimout", password:"123", color: "yellow", message: "Yes I'm fine", time:"11:23:01"}
]
app.get('/users', (req, res)=>{res.send(users)});

app.post('/users',(req, res)=> {
    user ={
        id: users.length +1,
        username: req.body.username,
        password:req.body.password,
        message: req.body.message,
        time: req.body.time
        
    }
    users.push(user);
    res.send(users);
});

