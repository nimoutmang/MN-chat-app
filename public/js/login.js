
let process = (res, username, password) =>{
    let users = res.data;
    for (let user of users){
        if ( user.username === username && user.password === password){
            window.location.href = rootEndpoint + "/chat.html";
            localStorage.setItem("username",user.username);
            localStorage.setItem("color", user.color);
            
        }else{
            console.log("No");
        }
    }
}

let login = (e) =>{
    let username = document.querySelector("#usr").value;
    let password = document.querySelector("#pwd").value;
    let url = rootEndpoint + "/users";
    axios
        .get(url)
        .then(res => process(res, username, password));
}


const btnLogin = document.querySelector('#btn-login');
const rootEndpoint = "http://localhost:5000";
btnLogin.addEventListener('click', login);


let isLogined = localStorage.length > 0;
if (isLogined) {
    window.location.href = rootEndpoint + "/chat.html";
}