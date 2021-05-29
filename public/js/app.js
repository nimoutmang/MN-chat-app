
function displayMessage(response) {
    let users = response.data;
    const main = document.querySelector('.main');
    const ul = document.querySelector('ul');
    if (ul !== null) {
        ul.remove();
    };
    const newul = document.createElement('ul');
    for (let user of users) {
        console.log(user)
        const li = document.createElement('li');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const i = document.createElement('i');
        i.className = "fa fa-ellipsis-v";
        i.id = "point";
        i.style.cursor = "pointer";
        i.style.fontSize = 20 + "px";
        span1.textContent = user.username + " : " + user.message;
        span3.textContent = user.time;
        span3.style.marginLeft = "80%";
        span1.style.color = "#fff";
        li.style.margin = 20 + "px";
        li.style.display = "flex";
        li.style.padding = 15 + "px";
        li.style.justifyContent = "space-between";
        li.style.background = user.color;
        span2.appendChild(i);
        li.appendChild(span1);
        li.appendChild(span2)
        newul.appendChild(li);
        newul.appendChild(span3);
        main.appendChild(newul);
    }

}

function sendMessage() {
    let message = document.querySelector('#message').value;
    let today = new Date();
    let name = localStorage.getItem("name");
    let color = localStorage.getItem("color");
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let user = { 
        username: name,
        message: message, 
        time: time, 
        color:color
        };
    const url = rootEndpoint + "/message";

    axios
        .post(url, user)
        .then(displayMessage);
    document.querySelector('#message').value = "";
}

function addMessage() {
    const url = rootEndpoint + "/message";
    axios
        .get(url)
        .then(displayMessage)
}


document.addEventListener('DOMContentLoaded', () => {
    picker.on('emoji', emoji => {
        document.querySelector('#message').value += emoji;
    });
    btnemoji.addEventListener('click', () => {
        picker.togglePicker(btnemoji);
    });
});

function showUser(res,username) {
    let image = res.data;
    for(let pf of image){
        if(pf.username === username){
            let userPf = document.createElement('img');
            let text = document.createElement('h2');
            userPf.src = pf.profile;
            text.textContent = pf.username;
            text.style.marginLeft = 10 + "px";
            userPf.style.width = 70 + "px";
            userPf.style.height = 70 + "px";
            userPf.style.borderRadius = 40 + "px";
            images.appendChild(userPf);
            images.appendChild(text);
        }
    }
}

function getprofile(){
    let name = localStorage.getItem("name");
    axios
    .get("http://localhost:5000/user")
    .then(res=>showUser(res,name))
}

let ishasLogin = localStorage.length > 0;
if (ishasLogin) {
    setInterval(addMessage, 1000)
}else{
    window.location.href = "/index.html";
}

function logOut() {
    localStorage.clear();
    window.location.href = rootEndpoint + "/index.html";
}


let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();

const btnshow = document.querySelector('#btn-exit')
const rootEndpoint = "http://localhost:5000";
btnshow.addEventListener('click', logOut);

const btnLogin = document.querySelector('#send')
btnLogin.addEventListener('click', sendMessage);
const images = document.querySelector('.img');
getprofile();