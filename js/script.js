$(document).ready(function () {
  const menuToggle = document.getElementById('menu-toggle');
  const hideMenuButton = document.getElementById('hide-menu-button'); // Botón para ocultar el menú
  const navMenu = document.querySelector('.nav__container__menu__botones');

  menuToggle.addEventListener('click', function () {
    toggleMenu();
  });

  hideMenuButton.addEventListener('click', function () {
    toggleMenu();
  });

  const menuLinks = document.querySelectorAll('.nav__container__menu__botones a');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.classList.remove('hidden');
    });
  });

  function toggleMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Agrega o quita la clase "hidden" en el botón de hamburguesa
    if (menuToggle.classList.contains('active')) {
      menuToggle.classList.add('hidden');
    } else {
      menuToggle.classList.remove('hidden');
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

