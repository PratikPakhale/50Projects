const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const blueLine = document.querySelector('.line-filled')

let count = 1

next.addEventListener('click', () => {
  count++
  
  if(count > circles.length){
    count = circles.length
  }

  updateDOM()
})

prev.addEventListener('click', () => {
  count--
  
  if(count < 1){
    count = 1
  }

  updateDOM()
})

function updateDOM(){
  circles.forEach((circle, index) =>{
    if(index < count){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }

    const actives = document.querySelectorAll('.active')

    console.log()

    blueLine.style.width = (actives.length - 1)/(circles.length - 1)*100 + '%'

  })

  

  if(count === 1){
    prev.disabled = true
  } else if(count === circles.length){
    next.disabled = true
  }else{
    prev.disabled = false
    next.disabled = false
  }
}