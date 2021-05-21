

function displayMessage(response) {
    let users = response.data;
    const main = document.querySelector('.main');                             
    const ul = document.querySelector('ul');
    if (ul !== null){
        ul.remove();
    };
    const newul = document.createElement('ul');
    for (let user of users) {
        const li = document.createElement('li');
        li.textContent = "Unknow: " + user.message;
        li.style.listStyle = "none";
        li.style.margin = 20 + "px";
        newul.appendChild(li);
        main.appendChild(newul);
    }

}

function saveMessage() {
    const message = document.querySelector('#message').value;
    let user = { uesernane: "Unkow", message: message };
    const url = "http://localhost:5000/users";
    axios
        .post(url, user)
        .then(displayMessage);
    console.log(user)

}

function addMessage() {
    const url = "http://localhost:5000/users";
    axios
        .get(url)
        .then(displayMessage)
}


// const btnLogin = document.querySelector('#login')
// btnLogin.addEventListener('click',displayUser);

const btnSend = document.querySelector('#send')
btnSend.addEventListener('click', saveMessage);

addMessage();