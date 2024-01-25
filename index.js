
 let activeOne = false
 let activeTwo = false
 let activeThree = false
function toggleOne() {
    let toggle = document.querySelector('.toggleOne')
    let text = document.querySelector('.textOne')
    activeOne = !activeOne
    if (activeOne) {
        toggle.classList.add('active')
        text.innerHTML = 'on'
    } else {
        toggle.classList.remove('active')
        text.innerHTML = 'off'
    }
   
}
function toggleTwo() {
    let toggle = document.querySelector('.toggleTwo')
    let text = document.querySelector('.textTwo')
    activeTwo = !activeTwo
    if (activeTwo) {
        toggle.classList.add('active')
        text.innerHTML = 'on'
    } else {
        toggle.classList.remove('active')
        text.innerHTML = 'off'
    }
   
}
 function toggleThree() {
     let toggle = document.querySelector('.toggleThree')
     let text = document.querySelector('.textThree')
     activeThree = !activeThree
     if (activeThree) {
         toggle.classList.add('active')
         text.innerHTML = 'on'
    } else {
         toggle.classList.remove('active')
         text.innerHTML = 'off'
     }
   
 }
