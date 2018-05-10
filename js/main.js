const navBtn = document.querySelector('.navbar__btn');
const side = document.querySelector('.side-nav');
const hamburger = document.querySelector('.navbar__hamburger');
const parent = document.querySelector('.navbar__parent');

let showMenu = false;


navBtn.addEventListener('click', function(e) {
    showMenu = !showMenu;
    if(showMenu === true) {
        side.style.width = "12rem";
        navBtn.style.marginRight="13rem";
        hamburger.style.fill ="#CCFFBB";

    }
    if(showMenu === false) {
        side.style.width = "0";
        navBtn.style.marginRight="2rem";
        hamburger.style.fill ="#38023B";
    }
    e.preventDefault();
});

// footIcon.addEventListener('onMouseOver', function() {

// })


