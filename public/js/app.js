function displayMessage(response) {
    let users = response.data;
    const main = document.querySelector('.main');
    const ul = document.querySelector('ul');
    if (ul !== null) {
        ul.remove();
    };
    const newul = document.createElement('ul');
    for (let user of users) {
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const i = document.createElement('i');
        i.className = "fa fa-ellipsis-v";
        i.style.fontSize = 20 + "px";
        span1.textContent = user.username + " : " + user.message;
        span3.textContent = user.time;
        span3.style.marginLeft = "80%";
        li.style.background = user.color;
        li.style.margin = 20 + "px";
        li.style.display = "flex";
        li.style.padding = 15 + "px";
        li.style.justifyContent = "space-between";
        span2.appendChild(i);
        li.appendChild(span1);
        li.appendChild(span2)
        newul.appendChild(li);
        newul.appendChild(span3);
        main.appendChild(newul);
    }
}

function saveMessage() {
    let message = document.querySelector('#message').value;
    let username = localStorage.getItem("username");
    let color = localStorage.getItem('color');
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let user = { username: username, message: message, color: color, time: time };
    const url = rootEndpoint+ "/message";
    
    axios
        .post(url, user)
        .then(displayMessage);
    document.querySelector('#message').value= "";
}

function addMessage() {
    const url =rootEndpoint+ "/message";
    axios
        .get(url)
        .then(displayMessage)
}

function logOut() {
    localStorage.clear();
    window.location.href = rootEndpoint + "/index.html";
}
// const btnLogin = document.querySelector('#bolder')
// btnLogin.addEventListener('click',displaytext);

const btnshow = document.querySelector('#btn-exit')
const rootEndpoint = "http://localhost:5000";
btnshow.addEventListener('click', logOut);

const btnLogin = document.querySelector('#send')
btnLogin.addEventListener('click', saveMessage);

let isLogined = localStorage.length > 0;
if (isLogined) {
    setInterval(addMessage, 1000);
}else{
    window.location.href = rootEndpoint + "/index.html";
}


/// emoji
loadAllEmoji();

let loadAllEmoji = (e) =>{
    let emoji = "";
    for (let i = 128512; i <=  129488; i++){

    }
}
let showEmojip = (e) =>{
    document.getElementById("emoji").removeAttribute("style");

}

let getEmojip = (e) =>{
    document.getElementById("get-emojis").value += control.innerHTML;
}




const emojis = document.querySelector("#showEmoji");
emojis.addEventListener("onclick", showEmojip);

const getEmosji = document.querySelector("#get-emojis");
getEmojis.addEventListener("onclick", getEmojip);



