document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      const target = document.querySelector(event.target.getAttribute('href'));
      if (target) { 
        event.preventDefault(); 
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; 
        let start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }

        function easeInOut(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(step);
      }
    }
  });


const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');


function menuAppear() {
  console.log(window.innerWidth)
  // menu.style.display = "flex";
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
  // navMenu.style.visibility = "hidden";
  // navMenu.style.opacity = "0";
}

function menuRemove() {
  // menu.style.display = "none";
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  // navMenu.style.visibility = "visible";
  // navMenu.style.opacity = "1";
}

burgerIcon.addEventListener('click', () => {
  menuAppear();
  // menu.style.display = "flex";
  // navMenu.style.display = "none";
});

const closeBurgMenu = document.getElementById('close-burger-menu');

closeBurgMenu.addEventListener('click', () => {
  menuRemove();
  // menu.style.display = "none";
  // navMenu.style.display = "flex";
}
);

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
    menuRemove();
  }
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menuRemove();
  }
});



const profileIcon = document.getElementById('profile-icon');
const profileMenu = document.getElementById('profile-menu');

profileIcon.addEventListener('click', () => {
  profileMenu.style.visibility = "visible";
  profileMenu.style.opacity = "1";
});

document.addEventListener('click', (event) => {
  if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
    profileMenu.style.visibility = "hidden";
    profileMenu.style.opacity = "0";
  }
});


const modal_login = document.querySelector('.modal_login');
const close1 = document.getElementById('close-btn-1');
const close2 = document.getElementById('close-btn-2');
const modal_register = document.querySelector('.modal_register');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');


loginButton.addEventListener('click', () => {
  modal_login.style.visibility = "visible";
  modal_login.style.opacity = "1";
});

registerButton.addEventListener('click', () => {
  modal_register.style.visibility = "visible";
  modal_register.style.opacity = "1";
});

close1.addEventListener('click', () => {
  modal_login.style.visibility = "hidden";
  modal_login.style.opacity = "0";
});

close2.addEventListener('click', () => {
  modal_register.style.visibility = "hidden";
  modal_register.style.opacity = "0";
});


const modalBuyCard = document.querySelector('.modal-buy-card');
const closeBuyCard = document.getElementById('close-buy-card');
const buyButton = document.getElementById('buy-button');

buyButton.addEventListener('click', () => {
  modalBuyCard.style.visibility = "visible";
  modalBuyCard.style.opacity = "1";
});

closeBuyCard.addEventListener('click', () => {
  modalBuyCard.style.visibility = "hidden";
  modalBuyCard.style.opacity = "0";
});