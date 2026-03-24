document.addEventListener('DOMContentLoaded', () => {
  // Слайдер брендов
  new Swiper('.brands-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 3, allowTouchMove: false }
    }
  })

  // Слайдер видов техники
  const techSwiper = document.querySelector('.tech')
  if (techSwiper) {
    new Swiper('.tech', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true }
    })
  }

  // Слайдер цен (если он есть)
  //const priceSwiper = document.querySelector('.price .swiper')
  //if (priceSwiper) {
  //  new Swiper('.price .swiper', {
  //   slidesPerView: 'auto',
  //   spaceBetween: 16,
  //   pagination: { el: '.swiper-pagination', clickable: true },
  //  breakpoints: {
  //    768: { slidesPerView: 1, allowTouchMove: false, autoHeight: true }
  //   }
  // })
  // }
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
