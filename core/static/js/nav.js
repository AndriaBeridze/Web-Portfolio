const body = document.querySelector('body');
const activeListItem = document.querySelector(`#${ body.id }-page a`);

if (activeListItem) {
    activeListItem.classList.add('active');
}

const nav = document.querySelector('#nav');
const navToggle = document.querySelector('.nav-toggler');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-toggler-open');
    navToggle.querySelector('i').classList.toggle('bi-list');
    navToggle.querySelector('i').classList.toggle('bi-x');
});