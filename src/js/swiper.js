document.addEventListener('DOMContentLoaded', () => {
  // Инициализация слайдера брендов
  if (document.querySelector('.brands-slider')) {
    new Swiper('.brands-slider', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: false,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 3, allowTouchMove: false }
      }
    })
  }

  // Инициализация слайдера видов техники
  if (document.querySelector('.tech')) {
    new Swiper('.tech', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true }
    })
  }

  // Инициализация слайдера цен (если нужно)
  if (document.querySelector('.price .swiper')) {
    new Swiper('.price .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 1, allowTouchMove: false, autoHeight: true }
      }
    })
  }
})
