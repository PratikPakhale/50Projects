const DOMjoke = document.querySelector('.joke')
const BTNjoke = document.getElementById('getJoke')

BTNjoke.addEventListener('click', generateJoke)

generateJoke()


async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  DOMjoke.innerHTML = data.joke
}