/* ================================= 
SELECTED ELEMENTS
==================================== */
const mobileIcn = document.querySelector('.mobile-icon');
const mainNav = document.querySelector('.main-nav');

let isMobileNavOpen = false;

/* ================================= 
EVENT HANDLERS
==================================== */
// HIDE & SHOW MOBILE ICON
mobileIcn.addEventListener('click', () => {
  if (!isMobileNavOpen) {
    mobileIcn.src = 'images/close.svg';
    mainNav.style.display = 'block';
  }

  if (isMobileNavOpen) {
    mobileIcn.src = 'images/hamburger.svg';
    mainNav.style.display = 'none';
  }
  isMobileNavOpen = !isMobileNavOpen;
})

