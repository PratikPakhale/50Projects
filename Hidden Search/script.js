const searchContainer = document.querySelector('.search-container')
const searchButton = document.querySelector('button')

searchButton.addEventListener('click', () => {
  searchContainer.classList.toggle('active')
})
