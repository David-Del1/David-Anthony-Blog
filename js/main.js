let menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
let nav = document.querySelector('nav')
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('active');
        menuOpen = false;
    }
    
});

$('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
