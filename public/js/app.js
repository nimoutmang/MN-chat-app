

function displayMessage (event){
    const message = document.querySelector('#message').value;
    const file = document.createElement('fieldset');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = message;
    li.style.listStyle = "none";
    file.style.background = "pink";
    file.appendChild(li);
    ul.appendChild(file);

   
}


const btnSend = document.querySelector('#send')
btnSend.addEventListener('click',displayMessage)