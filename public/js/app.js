function displayMessage (event){
    const message = document.querySelector('#message').value;
    let cardbody = document.querySelector(".card");
    let card_bg = document.querySelector(".card-body");
    cardbody.textContent = message;fv 
    card_bg.appendChild(cardbody);


    
    

   
}


const btnSend = document.querySelector('.btn-click');
btnSend.addEventListener('click',displayMessage);