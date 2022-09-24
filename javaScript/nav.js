function scrollValue() {
    var navbar = document.getElementById('navBar');
    var scroll = window.scrollY;
    if (scroll < 30) {
        navbar.classList.remove('navcolor2');
    } else {
        navbar.classList.add('navcolor2');
    }
}
window.addEventListener('scroll', scrollValue);