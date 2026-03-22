const feedback = document.querySelector('.feedback')
const modal = document.querySelector('.modal')
const modalBack = document.querySelector('.modal-back')

const closeBtn = document.querySelector('.modal__close')

document.addEventListener('click', openFeedback)

function openFeedback(event) {
  if (event.target.closest('.feedback')) {
    modal.classList.add('modal--active')
    modalBack.classList.add('modal-back--active')
  }
  if (event.target.closest('.modal-back')) {
    modal.classList.remove('modal--active')
    modalBack.classList.remove('modal-back--active')
  }
}

closeBtn.addEventListener('click', closeFeedback)

function closeFeedback(event) {
  if (event.target.closest('.modal__close')) {
    modal.classList.remove('modal--active')
    modalBack.classList.remove('modal-back--active')
  }
}
