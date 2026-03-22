document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu__burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const closeBtn = document.querySelector('.mobile-menu__close')

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--active')
    })
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--active')
    })
  }

  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('mobile-menu--active')) {
      if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        mobileMenu.classList.remove('mobile-menu--active')
      }
    }
  })

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      mobileMenu &&
      mobileMenu.classList.contains('mobile-menu--active')
    ) {
      mobileMenu.classList.remove('mobile-menu--active')
    }
  })
})
