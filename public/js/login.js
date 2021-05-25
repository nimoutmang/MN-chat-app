
let process = (res, username, password) =>{
    let users = res.data;
    for (let user of users){
        if ( user.username === username && user.password === password){
            window.location.href = rootEndpoint + "/chat.html";
            localStorage.setItem("username",user.username);
            localStorage.setItem("color", user.color);
            console.log(user.name)
        }else{
            console.log("No");
        }
    }
}

let login = (e) =>{
    let username = document.querySelector("#usr").value;
    let password = document.querySelector("#pwd").value;
    let url = rootEndpoint + "/users"
    axios
        .get(url)
        .then(res => process(res, username, password));
}


const btnLogin = document.querySelector('#btn-login');
const rootEndpoint = "https://mn-chat-app.herokuapp.com";
btnLogin.addEventListener('click', login);