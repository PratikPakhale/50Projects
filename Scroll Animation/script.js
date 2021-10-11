const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
  const triggerHeight = window.innerHeight / 4 * 3
  // console.log(triggerHeight)
  boxes.forEach(box => {
    if(box.getBoundingClientRect().top < triggerHeight){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}