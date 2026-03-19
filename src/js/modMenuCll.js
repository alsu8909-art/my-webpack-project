const call = document.querySelector('.call')
const modal = document.querySelector('.modal-call')
const modalBack = document.querySelector('.modal-back')

const closeBtn = document.querySelector('.close-call')

document.addEventListener('click', openCall)

function openCall(event) {
  if (event.target.closest('.call')) {
    modal.classList.add('modal--active')
    modalBack.classList.add('modal-back--active')
  }
  if (event.target.closest('.modal-back')) {
    modal.classList.remove('modal--active')
    modalBack.classList.remove('modal-back--active')
  }
}

closeBtn.addEventListener('click', closeCall)

function closeCall(event) {
  if (event.target.closest('.close-call')) {
    modal.classList.remove('modal--active')
    modalBack.classList.remove('modal-back--active')
  }
}
