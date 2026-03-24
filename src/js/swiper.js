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

// Кнопка "Показать все" для брендов
const button = document.querySelector('.show-more')
const wrapper = document.querySelector('.swiper-wrapper')
if (button && wrapper) {
  button.addEventListener('click', () => {
    const expanded = wrapper.classList.toggle('expanded')
    button.setAttribute('aria-expanded', expanded)
    const textSpan = button.querySelector('.show-more__text')
    if (textSpan) textSpan.textContent = expanded ? 'Скрыть' : 'Показать все'
  })
}
