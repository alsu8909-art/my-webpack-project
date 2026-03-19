import '../scss/style.scss'
;('use strict')
const swiper = new Swiper('.brands-slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      allowTouchMove: false
    }
  }
})
