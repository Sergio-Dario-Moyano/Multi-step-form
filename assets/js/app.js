/* Reference buttons */
  const stepContent1 = document.querySelector('#step__content1');
  const circleSteps = Array.from(document.querySelectorAll('.sidebar__number'));

/*Reference HTML*/
  //Checkbox
  const check1 = document.querySelector('#check__1');
  const check2 = document.querySelector('#check__2');
  const check3 = document.querySelector('#check__3');
  //RadioButtons
  const radio1 = document.querySelector('#check__plan__1');
  const radio2 = document.querySelector('#check__plan__2');
  const radio3 = document.querySelector('#check__plan__3');
//Globals
  let contador = 0;

const btn1 = document.querySelector('#btn__one').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.73}%`
  stepContent1.classList.add('move__left')
  cleanSteps(circleSteps)
})

const btn2 = document.querySelector('#btn__two').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.73}%`
  cleanSteps(circleSteps)
})

const btn3 = document.querySelector('#btn__three').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.73}%`
  cleanSteps(circleSteps)
})

const btn4 = document.querySelector('#btn__four').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador -= 16.73}%`
  cleanSteps(circleSteps)
})

const btnBackFour = document.querySelector('#step__goBack__four').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 16.73}%`
  cleanSteps(circleSteps)
})

const btnBackThree = document.querySelector('#step__goBack__three').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 16.73}%`
  cleanSteps(circleSteps)
})

const btnBackTwo = document.querySelector('#step__goBack__two').addEventListener("click", (e) => {
  e.preventDefault()
  stepContent1.style.marginLeft = `${contador += 16.73}%`
  cleanSteps(circleSteps)
})

/*Functions */

const cleanSteps = (steps) => {
  steps.forEach(element => {
    element.classList.remove('sidebar__paint')
  });
  paintStep()
}

const paintStep = () => {
  if(contador < -16.00 && contador > -17.00) {
    document.querySelector('#sidebar__number__2').classList.add('sidebar__paint')
  }else if(contador < -33.00 && contador > -34.00) {
    document.querySelector('#sidebar__number__3').classList.add('sidebar__paint')
  }else if(contador < -50.00) {
    document.querySelector('#sidebar__number__4').classList.add('sidebar__paint')
  }else {
    document.querySelector('#sidebar__number__1').classList.add('sidebar__paint')
  }
}

const validar = () => {
  if(check1.checked) {
    document.querySelector('.pick1').classList.add('border')
  }else {
    document.querySelector('.pick1').classList.remove('border')
  }
  if(check2.checked) {
    document.querySelector('.pick2').classList.add('border')
  }else {
    document.querySelector('.pick2').classList.remove('border')
  }
  if(check3.checked) {
    document.querySelector('.pick3').classList.add('border')
  }else {
    document.querySelector('.pick3').classList.remove('border')
  }
}

const validarRadio = () => {
  if(radio1.checked) {
    document.querySelector('.plan__1').classList.add('border')
  }else {
    document.querySelector('.plan__1').classList.remove('border')
  }
  if(radio2.checked) {
    document.querySelector('.plan__2').classList.add('border')
  }else {
    document.querySelector('.plan__2').classList.remove('border')
  }
  if(radio3.checked) {
    document.querySelector('.plan__3').classList.add('border')
  }else {
    document.querySelector('.plan__3').classList.remove('border')
  }
}

//Listeners
  //Checkbox
  check1.addEventListener("change", validar, false);
  check2.addEventListener("change", validar, false);
  check3.addEventListener("change", validar, false);
  //RadioButtons
  radio1.addEventListener("change", validarRadio)
  radio2.addEventListener("change", validarRadio)
  radio3.addEventListener("change", validarRadio)
