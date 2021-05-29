
let login = (e) => {
    e.preventDefault();
    let username = document.querySelector("#usr").value;
    let password = document.querySelector("#pwd").value;
    let url = rootEndpoint + "/user";
    axios
        .get(url)
        .then(res => {
            let users = res.data;
            let islogin = false;
            for (let user of users) {
                if (user.username === username && user.password === password && !islogin) {
                    localStorage.setItem("name", user.username);
                    localStorage.setItem("color", user.color);
                    window.location.href = rootEndpoint + "/chat.html";
                    
                } 
            }
            if(islogin = true){
                alert("Login success!")
            }else {
                alert("Password not correct")
            }
        });

    
}
const btnLogin = document.querySelector('#btn-login');
const rootEndpoint = "http://localhost:5000";
btnLogin.addEventListener('click', login);

let ishasLogin = localStorage.length > 0;
if (ishasLogin){
    window.location.href = "/chat.html"
}