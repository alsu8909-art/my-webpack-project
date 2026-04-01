document.addEventListener('DOMContentLoaded', () => {
  let brandsSwiper = null
  let techSwiper = null
  let priceSwiper = null

  // Функция для инициализации/уничтожения Swiper в зависимости от ширины
  function initSwipers() {
    const width = window.innerWidth

    // ========== БЛОК БРЕНДОВ ==========
    const brandsContainer = document.querySelector('.brands-slider')
    if (brandsContainer) {
      if (width < 768) {
        // Мобильные: инициализируем Swiper
        if (!brandsSwiper) {
          brandsSwiper = new Swiper('.brands-slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        }
      } else {
        // Планшет/десктоп: уничтожаем Swiper
        if (brandsSwiper) {
          brandsSwiper.destroy(true, true)
          brandsSwiper = null
        }
      }
    }

    // ========== БЛОК РЕМОНТА ТЕХНИКИ ==========
    const techContainer = document.querySelector('.tech')
    if (techContainer) {
      if (width < 768) {
        // Мобильные: инициализируем Swiper
        if (!techSwiper) {
          techSwiper = new Swiper('.tech', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        }
      } else {
        // Планшет/десктоп: уничтожаем Swiper
        if (techSwiper) {
          techSwiper.destroy(true, true)
          techSwiper = null
        }
      }
    }

    // ========== БЛОК ЦЕН ==========
    const priceContainer = document.querySelector('.price .swiper')
    if (priceContainer) {
      if (width < 768) {
        // Мобильные: инициализируем Swiper
        if (!priceSwiper) {
          priceSwiper = new Swiper('.price .swiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        }
      } else {
        // Планшет/десктоп: уничтожаем Swiper
        if (priceSwiper) {
          priceSwiper.destroy(true, true)
          priceSwiper = null
        }
      }
    }
  }

  // Запускаем при загрузке
  initSwipers()

  // Запускаем при изменении размера окна
  window.addEventListener('resize', initSwipers)
})

// ========== КНОПКА "ПОКАЗАТЬ ВСЕ" ДЛЯ БРЕНДОВ ==========
const button = document.querySelector('.show-more')
const wrapper = document.querySelector('.brands .swiper-wrapper')

if (button && wrapper) {
  button.addEventListener('click', () => {
    const expanded = wrapper.classList.toggle('expanded')
    button.setAttribute('aria-expanded', expanded)

    const textSpan = button.querySelector('.show-more__text')
    if (textSpan) {
      textSpan.textContent = expanded ? 'Скрыть' : 'Показать все'
    }
  })
}

// ========== СКРОЛЛ ДЛЯ SLIDEMENU (КОЛЕСИКОМ МЫШИ И ДРАГ-СКРОЛЛ) ==========
const sliderRow = document.querySelector('.slidemenu__first-row')

if (sliderRow) {
  // 1. Скролл колесиком мыши
  sliderRow.addEventListener('wheel', (e) => {
    e.preventDefault()
    sliderRow.scrollLeft += e.deltaY // горизонтальный скролл от вертикального колеса
  })

  // 2. Драг-скролл мышью (зажатием и перетаскиванием)
  let isDown = false
  let startX
  let scrollLeft

  sliderRow.addEventListener('mousedown', (e) => {
    isDown = true
    sliderRow.classList.add('active')
    sliderRow.style.cursor = 'grabbing'
    startX = e.pageX - sliderRow.offsetLeft
    scrollLeft = sliderRow.scrollLeft
  })

  sliderRow.addEventListener('mouseleave', () => {
    isDown = false
    sliderRow.classList.remove('active')
    sliderRow.style.cursor = 'grab'
  })

  sliderRow.addEventListener('mouseup', () => {
    isDown = false
    sliderRow.classList.remove('active')
    sliderRow.style.cursor = 'grab'
  })

  sliderRow.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - sliderRow.offsetLeft
    const walk = (x - startX) * 1.5
    sliderRow.scrollLeft = scrollLeft - walk
  })

  // Меняем курсор при наведении
  sliderRow.style.cursor = 'grab'
}
