let container =document.querySelector('.container');
let cardNumber = 2; 
function add() {
    let newcard = document.createElement('div'); 
    newcard.classList.add('card'); 
    newcard.innerText = cardNumber++; 
    container.appendChild(newcard); 
}
