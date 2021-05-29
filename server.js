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
