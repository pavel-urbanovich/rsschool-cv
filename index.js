const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation-wrapper');
const menu = document.querySelector('.subnav');


function openMenu (event) {
  if (event.target.classList.contains('line') || event.target.classList.contains('hamburger')) {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.classList.toggle('active');
  }

}

function closeMenu (event) {
  if(event.target.classList.contains('navigation-link')) {
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.body.classList.remove('active');
  }
}

navigation.addEventListener('click', openMenu);
navigation.addEventListener('click', closeMenu);