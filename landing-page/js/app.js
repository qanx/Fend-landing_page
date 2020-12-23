
// function timing(){

let oldPostion = window.pageYOffset;
window.onscroll = function () {
  let currentPostion = window.pageYOffset;

  if (oldPostion < currentPostion) {
    hideNav();

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      toTopBut();
    } else {
      toTop.style.visibility = 'hidden';
    }
  } else {
    showNav();
    setTimeout(hideNav, 1700);
  }
  oldPostion = currentPostion;
};

function showNav() {
  document.querySelector('header').classList.add('header-showing');
  document.querySelector('header').classList.remove('header-hidden');
}

function hideNav() {
  document.querySelector('header').classList.add('header-hidden');
  document.querySelector('header').classList.remove('header-showing');
}


//////////////////////////////////////////////  to Top buton
let toTop = document.createElement('button');
toTop.textContent = 'to top';
document.body.appendChild(toTop).style.position = 'absolute ';
toTop.style.position = 'absolute ';
toTop.style.bottom = ' -150%';
toTop.style.left = ' 50%';
toTop.style.visibility = 'hidden';
toTop.style.padding = '30px';
toTop.style.background = ' rgba(255, 99, 71, 0.1)';

let footer = document.querySelector('.page__footer');
function toTopBut() {
  toTop.style.visibility = 'visible';
}

//////////////////////////////////////////////  END OF to Top buton

/**
 * Define Global Variables
 *
 */
const nav = document.querySelector('#navbar__list');
const s1 = document.querySelector('#section1');
const s2 = document.querySelector('#section2');
const s3 = document.querySelector('#section3');
const header1 = document.querySelector('.main__hero');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

let s1Ele = document.createElement('li');
s1Ele.innerHTML = '<a href=#">Section 1</a>';
s1Ele.classList.add('menu__link');
nav.appendChild(s1Ele);

let s2Ele = document.createElement('li');
s2Ele.innerHTML = '<a href=#">Section 2</a>';
s2Ele.classList.add('menu__link');
nav.appendChild(s2Ele);

let s3Ele = document.createElement('li');
s3Ele.innerHTML = '<a href=#">Section 3</a>';
s3Ele.classList.add('menu__link');
nav.appendChild(s3Ele);

s1Ele.addEventListener('click', goTo);
s2Ele.addEventListener('click', goTo2nd);
s3Ele.addEventListener('click', goTo3rd);
toTop.addEventListener('click', gotTop);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

function goTo() {
  s1.scrollIntoView();
}

function goTo2nd() {
  s2.scrollIntoView();
}

function goTo3rd() {
  s3.scrollIntoView();
}

function gotTop() {
  header1.scrollIntoView();
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
