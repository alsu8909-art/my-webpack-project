document.addEventListener('DOMContentLoaded', () => {
  const callBtn = document.querySelector('.button__call') // трубка
  const chatBtn = document.querySelector('.button__chat') // сообщение
  const modalCall = document.querySelector('.modal-call') // модалка звонка
  const modalFeedback = document.querySelector('.modal') // модалка обратной связи
  const modalBack = document.querySelector('.modal-back')
  const closeBtns = document.querySelectorAll('.modal__close')

  function openModal(modal) {
    if (modal && modalBack) {
      modal.style.display = 'block'
      modalBack.style.display = 'block'
    }
  }
  function closeModal(modal) {
    if (modal && modalBack) {
      modal.style.display = 'none'
      modalBack.style.display = 'none'
    }
  }

  if (callBtn && modalCall) {
    callBtn.addEventListener('click', () => openModal(modalCall))
  }
  if (chatBtn && modalFeedback) {
    chatBtn.addEventListener('click', () => openModal(modalFeedback))
  }

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(modalCall)
      closeModal(modalFeedback)
    })
  })

  if (modalBack) {
    modalBack.addEventListener('click', () => {
      closeModal(modalCall)
      closeModal(modalFeedback)
    })
  }
})
