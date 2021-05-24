

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
        li.className = "list-group-item list-group-item-primary";
        span1.textContent = user.username + " : " + user.message;
        span2.appendChild(i);
        span3.textContent = user.time;
        span3.style.marginLeft = "80%";
        li.style.margin = 20 + "px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.appendChild(span1);
        li.appendChild(span2)
        newul.appendChild(li);
        newul.appendChild(span3);
        main.appendChild(newul);

    }

}

function saveMessage() {
    const message = document.querySelector('#message').value;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let user = { uesername: "Unknown", message: message, time: time };
    const url = "https://mn-chat-app.herokuapp.com/users"
    // const url = "http://localhost:5000/users";
    axios
        .post(url, user)
        .then(displayMessage);
    console.log(user)

}

function addMessage() {
    const url = "https://mn-chat-app.herokuapp.com/users"
    // const url = "http://localhost:5000/users";
    axios
        .get(url)
        .then(displayMessage)
}


// const btnLogin = document.querySelector('#bolder')
// btnLogin.addEventListener('click',displaytext);
const btnLogin = document.querySelector('#btn-login')
btnLogin.addEventListener('click', saveMessage);

const btnSend = document.querySelector('#send')
btnSend.addEventListener('click', saveMessage);

addMessage();

let showForm = () => {
    document.querySelector('.chat').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
}
let hideForm = () => {
    document.querySelector('.chat').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
    
}

let btnHide = document.querySelector('#btn-login');
let btnShow = document.querySelector('#btn-create');

btnShow.addEventListener('click', showForm);
btnHide.addEventListener('click', hideForm);

