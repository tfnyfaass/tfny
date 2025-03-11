document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let landingScreen = document.querySelector(".landing-screen");
    let topHalf = document.querySelector(".top-half");
    let bottomHalf = document.querySelector(".bottom-half");
    let header = document.querySelector(".header");
    let mainContent = document.querySelector(".main");

    let landingHeight = landingScreen.offsetHeight;
    let scrollRatio = Math.min(scrollPosition / landingHeight, 1);

    // Move halves apart on scroll
    topHalf.style.transform = `translateY(-${scrollRatio * 100}%)`;
    bottomHalf.style.transform = `translateY(${scrollRatio * 100}%)`;

    // Hide landing screen once fully scrolled
    if (scrollRatio >= 1) {
        landingScreen.style.display = "none";
        header.style.opacity = "1"; // Show header
        mainContent.style.opacity = "1"; // Show main content
    } else {
        mainContent.style.opacity = "0"; // Keep main content hidden
    }
});
