let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let insta = document.querySelector('.icons');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

insta.onclick = () => {
    window.open("https://www.instagram.com/edwardswatersports/?igshid=MzRlODBiNWFlZA%3D%3D");
};