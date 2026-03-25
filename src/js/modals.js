document.addEventListener('DOMContentLoaded', () => {
  const callBtns = document.querySelectorAll('.button__call')
  const chatBtns = document.querySelectorAll('.button__chat')
  const modalCall = document.querySelector('.modal-call')
  const modalFeedback = document.querySelector('.modal')
  const modalBack = document.querySelector('.modal-back')
  const closeBtns = document.querySelectorAll(
    '.modal__close, .modal-desktop-close'
  ) // добавлен десктопный класс

  if (!modalCall || !modalFeedback || !modalBack) return

  function openModal(modal) {
    modal.classList.add('modal--active')
    modalBack.style.display = 'block'
  }

  function closeAllModals() {
    modalCall.classList.remove('modal--active')
    modalFeedback.classList.remove('modal--active')
    modalBack.style.display = 'none'
  }

  callBtns.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      openModal(modalCall)
    })
  )

  chatBtns.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      openModal(modalFeedback)
    })
  )

  closeBtns.forEach((btn) => btn.addEventListener('click', closeAllModals))

  modalBack.addEventListener('click', closeAllModals)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals()
  })
})
