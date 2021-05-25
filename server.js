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
];

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

app.get('/users', (req, res)=>{res.send(users)});

app.post('/users',(req, res)=> {
    user ={
        id: users.length +1,
        username: req.body.username,
        password:req.body.password,
        message: req.body.message,
        time: req.body.time,
        color: req.body.color
        
    }
    users.push(user);
    res.send(users);
});

