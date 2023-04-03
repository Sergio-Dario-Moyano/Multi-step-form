const stepContent1 = document.querySelector('#step__content1');

/* Reference buttons */
let contador = 0;

const btn1 = document.querySelector('#btn__one').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.6}%`
  stepContent1.classList.add('move__left')
})

const btn2 = document.querySelector('#btn__two').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.8}%`
})

const btn3 = document.querySelector('#btn__three').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 17}%`
})

const btn4 = document.querySelector('#btn__four').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.6}%`
})

const btnBackFour = document.querySelector('#step__goBack__four').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 17}%`
})

const btnBackThree = document.querySelector('#step__goBack__three').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 16.8}%`
})

const btnBackTwo = document.querySelector('#step__goBack__two').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 16.6}%`
})