document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu__burger')
  const mobileMenu = document.querySelector('.mobile-menu')
  const closeBtn = document.querySelector('.mobile-menu__close')
  const overlay = document.querySelector('.menu-overlay')
  const desktopBreakpoint = 1366 // должен совпадать с $breakpoint-desktop

  function openMenu() {
    if (window.innerWidth < desktopBreakpoint) {
      mobileMenu.classList.add('mobile-menu--active')
      document.body.style.overflow = 'hidden'
      if (overlay) overlay.style.display = 'block'
    }
  }

  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--active')
    document.body.style.overflow = ''
    if (overlay) overlay.style.display = 'none'
  }

  // При загрузке: если уже десктоп, закрываем меню и оверлей
  if (window.innerWidth >= desktopBreakpoint) {
    closeMenu()
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', openMenu)
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', closeMenu)
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu)
  }

  // Закрытие по Escape (только на мобильных)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.innerWidth < desktopBreakpoint) {
      closeMenu()
    }
  })

  // Закрытие при клике вне меню (на случай, если оверлей не сработает)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < desktopBreakpoint) {
      if (mobileMenu && mobileMenu.classList.contains('mobile-menu--active')) {
        if (
          !mobileMenu.contains(e.target) &&
          !burger.contains(e.target) &&
          e.target !== overlay
        ) {
          closeMenu()
        }
      }
    }
  })

  // При изменении размера окна – если стало десктопом, закрываем меню
  window.addEventListener('resize', () => {
    if (window.innerWidth >= desktopBreakpoint) {
      closeMenu()
    }
  })
})
