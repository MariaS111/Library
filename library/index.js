
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



const registerSubmitButton = document.getElementById('registerSubmitButton');
const loginSubmitButton = document.getElementById('loginSubmitButton');
const firstnameInput = document.getElementById('first-name-register');
const lastnameInput = document.getElementById('last-name-register');
const emailInput = document.getElementById('email-register');
const passwordInput = document.getElementById('password-register');
const profile = document.getElementById('profile');
const profileAuth = document.getElementById('profile-icon-authorized');
const paragraph = document.querySelector('.initials-profile-icon');

const profileMenuAuth = document.getElementById('profile-menu-authenticated');


registerSubmitButton.onclick = function() {
  const name = firstnameInput.value;
  const lastName = lastnameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;
  var randomNumber = Math.floor(Math.random() * 0x1000000000); 
  var cardNumber = randomNumber.toString(16).toUpperCase();
  console.log(cardNumber)
  
  localStorage.setItem('firstName', name);
  localStorage.setItem('password', password);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('card-number', cardNumber);
  var initials = localStorage['name'][0] + localStorage['lastName'][0]
  auth(initials)
  modal_register.style.visibility = "hidden";
  modal_register.style.opacity = "0";
}


var auth = (initials) => {
  profile.style.display = 'none'
  profileAuth.style.display = 'block'
  console.log(initials)
  paragraph.textContent = initials.toUpperCase();
  paragraph.style.display = 'block';
 
  profileIcon.addEventListener('click', () => {
    profileMenuAuth.style.visibility = "visible";
    profileMenuAuth.style.opacity = "1";
    profileMenu.style.visibility = "hidden";
    profileMenu.style.opacity = "0";
  });

}


const emailCardInputLogin = document.getElementById('email-card-login');
const passwordInputLogin = document.getElementById('password-login');

loginSubmitButton.onclick = function() {
  const password = passwordInputLogin.value;
  const emailCard = emailCardInputLogin.value;

  const savedPassword = localStorage.getItem('password');
  const savedEmail = localStorage.getItem('email');
  const savedCardNumber = localStorage.getItem('card-number');
  

  if (savedPassword && savedEmail && savedCardNumber) {
    if ((password === savedPassword && emailCard === savedEmail) || (password === savedPassword && emailCard === savedCardNumber)) {
      var initials = localStorage['firstName'][0] + localStorage['lastName'][0]
      auth(initials);
      modal_login.style.visibility = "hidden";
      modal_login.style.opacity = "0";
    } else {
      alert("Неверный пароль, имейл или номер карты.");
    }
  } else {
    alert("Пользователь не найден.");
  }
}

const myProfile = document.getElementById('my-profile');
const modal_profile = document.querySelector('.modal-profile');
const closeMyProfile = document.getElementById('close-btn-prof');
const logOut = document.getElementById('log-out');


myProfile.addEventListener('click', () => {
  modal_profile.style.visibility = "visible";
  modal_profile.style.opacity = "1";
});

closeMyProfile.addEventListener('click', () => {
  modal_profile.style.visibility = "hidden";
  modal_profile.style.opacity = "0";
});

logOut.addEventListener('click', () => {
  localStorage.clear();
  console.log(localStorage)
});
console.log(localStorage)


