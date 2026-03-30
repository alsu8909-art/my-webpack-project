document.addEventListener('DOMContentLoaded', () => {
  // Слайдер брендов (работает всегда)
  new Swiper('.brands-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 3, allowTouchMove: false }
    }
  })

  // Слайдер видов техники (работает всегда)
  new Swiper('.tech', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: { el: '.swiper-pagination', clickable: true }
  })

  // Слайдер цен – только на мобильных (<768px)
  if (window.innerWidth < 768) {
    new Swiper('.price .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true }
    })
  }
})

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

const button = document.querySelector('.show-more')
const wrapper = document.querySelector('.swiper-wrapper')

button.addEventListener('click', () => {
  const expanded = wrapper.classList.toggle('expanded')

  button.setAttribute('aria-expanded', expanded)

  button.querySelector('.show-more__text').textContent = expanded
    ? 'Скрыть'
    : 'Показать все'
})
const slider = document.querySelector('.slidemenu')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})
slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const walk = (x - startX) * 2 // скорость прокрутки
  slider.scrollLeft = scrollLeft - walk
})
