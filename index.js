let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}
let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingcart.classList.toggle('active');
}
let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}





window.conscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}














