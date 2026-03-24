document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.querySelector('.repair-tech .show')
  const techList = document.querySelector('.tech__list')

  if (showBtn && techList) {
    showBtn.addEventListener('click', () => {
      techList.classList.toggle('tech__list--full')
      showBtn.classList.toggle('expanded')
    })
  }
})
