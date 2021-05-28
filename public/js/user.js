
function displayUser (res){
    let users = res.data;
    let myuser = localStorage.getItem('username');
    for (let user of users){
        if (user.username !== myuser){
            const imgs = document.createElement("div");
            const image = document.createElement("img");
            const span = document.createElement("span");
            span.id = "text";
            span.textContent = user.username;
            span.style.marginLeft = 4 + "px";
            imgs.className = "img";
            image.src = user.img;
            image.style.width = 70 + "px"; 
            image.style.height = 70 + "px"; 
            image.style.borderRadius = 35 + "px";
            imgs.appendChild(image);
            imgs.appendChild(span);
            div.appendChild(imgs);
        }else{
            let myImage = document.querySelector('#myImage');
            myImage.src = user.img;
        }
        
    }

}



function requestUser () {

    let url = rootEndpoints + "/users"
    axios
    .get(url)
    .then(displayUser);
}

const div = document.querySelector('#col-3');

const rootEndpoints = "http://localhost:5000";
requestUser();