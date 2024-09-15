// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  const menuItems = document.querySelectorAll('.menu__item');

  menuItems.forEach(item => {
    const arrow = item.closest('.arrow__item').querySelector('.arr');
    
    item.addEventListener('mouseenter', () => {
      arrow.style.display = 'flex';
    });
  
    item.addEventListener('mouseleave', () => {
      arrow.style.display = 'none';
    });
  });
  function removeArrElements() {
    const arrElements = document.querySelectorAll('.arr');
    
    if (window.innerWidth <= 991) {
      arrElements.forEach(element => {
        element.remove();
      });
    }
  }
  
  // Запуск функции при загрузке страницы
  window.addEventListener('load', removeArrElements);
  
  // Запуск функции при изменении размера окна
  window.addEventListener('resize', removeArrElements);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
}


let swiper1, swiper2;

function initSwiper() {
  const screenWidth = window.innerWidth;

  // Первый слайдер (ранее был вторым)
  if (!swiper1) {
    swiper1 = new Swiper('.swiper-1', {
      slidesPerView: screenWidth <= 590 ? 1 : screenWidth <= 768 ? 2 : 3,  // 2 слайда на 768px
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-1 .swiper-button-next',
        prevEl: '.swiper-1 .swiper-button-prev',
      },
    });
  }

  // Второй слайдер (ранее был первым)
  if (!swiper2) {
    swiper2 = new Swiper('.swiper-2', {
      slidesPerView: screenWidth <= 590 ? 1 : 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-2 .swiper-button-next',
        prevEl: '.swiper-2 .swiper-button-prev',
      },
    });
  }
}

// Инициализация Swiper при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  initSwiper();
  window.addEventListener('resize', function() {
    swiper1.destroy();
    swiper2.destroy();
    swiper1 = null;
    swiper2 = null;
    initSwiper();
  });
});
// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion() 
