let menu=document.querySelector('#menu-icon');
let navbars=document.querySelector('.navbars');
/* click to show the menu items*/
menu.onclick = () => {
    menu .classList .toggle('bx-x');
    navbars .classList .toggle('active');

}
/*click on the items leads to scroling effect towards the specific items*/
window.onscroll = () => {
    menu .classList .remove('bx-x');
    navbars .classList .remove('active');

}