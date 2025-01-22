/*================ Active link ==============*/
const navlink = document.querySelectorAll('.nav__link');

function activeLink () {
    navlink.forEach ((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));


/*================ Zitat Swiper ==============*/

var testiSwiper = new Swiper('.zitat__container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: false,
    keyboard: true,
  });

  