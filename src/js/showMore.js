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
