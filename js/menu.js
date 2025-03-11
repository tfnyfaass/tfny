document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});


function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('active');
}

window.onscroll = function() {
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled'); 
    } else {
        document.body.classList.remove('scrolled');
    }
};

window.onresize = function() {
    if (window.innerWidth > 768) {
        document.querySelector('.mobile-nav').classList.remove('active');
        document.body.classList.remove('scrolled');
    }
};
