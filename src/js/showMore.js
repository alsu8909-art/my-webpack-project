const button = document.querySelector('.show-more')
const wrapper = document.querySelector('.swiper-wrapper')

button.addEventListener('click', () => {
  const expanded = wrapper.classList.toggle('expanded')

  button.setAttribute('aria-expanded', expanded)

  button.querySelector('.show-more__text').textContent = expanded
    ? 'Скрыть'
    : 'Показать все'
})
