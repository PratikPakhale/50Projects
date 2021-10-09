const section = document.querySelector('section')
const text = document.getElementById('percentage')
const interval = setInterval(blurryLoading,30)
let count = 0;
console.log(text)
function blurryLoading(){
  count++
  if(count >= 100){
    clearInterval(interval)
  }
  text.innerText = `${count}%`
  section.style.filter = `blur(${scale(count,0,100,10,0)}px)`
  text.style.opacity = `${scale(count,0,100,1,0)}`
  // console.log(count)
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}