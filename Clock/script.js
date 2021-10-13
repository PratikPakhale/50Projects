const DOMtoggle = document.querySelector('.toggle')
const DOMhour = document.querySelector('.hour')
const DOMminute = document.querySelector('.minute')
const DOMsecond = document.querySelector('.second')
const DOMtime = document.querySelector('.time')
const DOMdate = document.querySelector('.date')

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']

DOMtoggle.addEventListener('click', () => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')){
    html.classList.remove('dark')
    DOMtoggle.innerHTML = "Dark Mode"
  }else{
    html.classList.add('dark')
    DOMtoggle.innerHTML = "Light Mode"
  }
})

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  DOMhour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  DOMminute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  DOMsecond.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

  DOMtime.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

  DOMdate.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)