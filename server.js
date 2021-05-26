const express = require("express");
const app = express();


app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));


let message = [
    {id:1, username:"Molika", color: "pink", message: "Hello!, How are you?", time:"11:23:01"},
    {id:2, username:"Nimout", color: "yellow", message: "Yes I'm fine", time:"11:23:01"}
];

let users = [
    {id:1, username:"Molika", password:"123", color: "pink"},
    {id:2, username:"Nimout", password:"123", color: "yellow"}
]

let icons = [
    {id: 1, icon: '😓', sign: '):'},
    {id: 2, icon: '😄', sign: '(:'},
    {id: 3, icon: '😭', sign: 'cry'},
    {id: 4, icon: '🥰', sign: 'love'},
    {id: 5, icon: '😷', sign: 'sick'},
    {id: 6, icon: '😲', sign: 'wow'},
    {id: 7, icon: '😤', sign: 'bore'},
    {id: 8, icon: '🥱', sign: 'sleep'},
    {id: 9, icon: '😋', sign: 'haha'},
    {id: 10, icon: '🤬', sign: 'angry'},
]
app.get('/emoji', (req, res) => res.send(icons));

app.get('/message', (req, res)=>{res.send(message)});

app.post('/message',(req, res)=> {
    user ={
        id: message.length +1,
        username: req.body.username,
        password:req.body.password,
        message: req.body.message,
        time: req.body.time,
        color: req.body.color
        
    }
    message.push(user);
    res.send(message);
});

app.get('/users', (req, res)=> {res.send(users)});