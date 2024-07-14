
document.addEventListener("DOMContentLoaded", (e) => {
    window.addEventListener("scroll", (ev) => {
        const header = document.querySelector("header");


        const op = 0.2 + window.scrollY / 300;
        header.style.opacity = op;
    })
})