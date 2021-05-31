const express = require("express");
const app = express();
const fs = require("fs");

app.listen(process.env.PORT || 5000, () =>console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

let user = [];
let text = [];

app.post('/message',(req, res)=> {
    let name = req.body
    text.push(name);
    fs.writeFileSync("message.json", JSON.stringify(text));
    res.send(text);
});
app.get('/message', (req, res)=>{
    let text = JSON.parse(fs.readFileSync("message.json"));
    res.send(text)
});
text = JSON.parse(fs.readFileSync("message.json"));


app.get('/user', (req, res)=>{
    let user = JSON.parse(fs.readFileSync("user.json"));
    res.send(user)
});
user = JSON.parse(fs.readFileSync("user.json"));

let icons = [
    { id: 1, icon: '😓', sign: '):' },
    { id: 2, icon: '😄', sign: '(:' },
    { id: 3, icon: '😭', sign: 'cry' },
    { id: 4, icon: '🥰', sign: 'love' },
    { id: 5, icon: '😷', sign: 'sick' },
    { id: 6, icon: '😲', sign: 'wow' },
    { id: 7, icon: '😤', sign: 'bore' },
    { id: 8, icon: '🥱', sign: 'sleep' },
    { id: 9, icon: '😋', sign: 'haha' },
    { id: 10, icon: '🤬', sign: 'angry' },
]

app.get('/emoji', (req, res) => res.send(icons));