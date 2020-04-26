const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const logo = document.getElementById('logo');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
    logo.classList.toggle('slide-on');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
        logo.classList.toggle("slide-on");
    });
});