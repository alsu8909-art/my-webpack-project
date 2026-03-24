document.addEventListener('DOMContentLoaded', () => {
  const callBtns = document.querySelectorAll('.button__call')
  const chatBtns = document.querySelectorAll('.button__chat')
  const modalCall = document.querySelector('.modal-call')
  const modalFeedback = document.querySelector('.modal')
  const modalBack = document.querySelector('.modal-back')
  const closeBackBtn = document.querySelector('.modal-back__close')

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

  if (closeBackBtn) {
    closeBackBtn.addEventListener('click', closeAllModals)
  }

  modalBack.addEventListener('click', (e) => {
    if (e.target === modalBack) {
      closeAllModals()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals()
  })
})
