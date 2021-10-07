const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')

open.addEventListener('click', () => {
  container.classList.add('show-nav')
  nav.style.transform = "translateX(0%)"
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav')
  nav.style.transform = "translateX(-100%)"
})