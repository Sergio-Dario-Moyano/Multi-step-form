//Globals
let contador = 0;
let cont = 0;
const parametros = [
  {
    plan: "",
    pricePlan: 0,
    toggle: "Monthly",
    checks: [
      {
        title: "",
        price: 0
      },

      {
        title: "",
        price: 0
      },

      {
        title: "",
        price: 0
      }
    ]
  }
];

//step circles
const circleSteps = document.querySelectorAll('.sidebar__number');
circleSteps[cont].classList.add('sidebar__paint')

//Código de botones NEXT

  const btn1 = document.querySelector('#btn__one').addEventListener("click", () => {
    const stepContent1 = document.querySelector('#step__content1');
    stepContent1.style.marginLeft = `${contador = -16.73}%`
    stepContent1.classList.add('move__left')
    circleSteps[cont].classList.remove('sidebar__paint')
    circleSteps[cont + 1].classList.add('sidebar__paint')
    cont += 1;
    misRadios(parametros)
  })

const btn2 = document.querySelector('#btn__two').addEventListener("click", () => {
  const stepContent2 = document.querySelector('#step__content2');
  stepContent2.style.marginLeft = `${contador = -16.73}%`
  stepContent2.classList.add('move__left')
  circleSteps[cont].classList.remove('sidebar__paint')
  circleSteps[cont + 1].classList.add('sidebar__paint')
  cont += 1;
})

const btn3 = document.querySelector('#btn__three').addEventListener("click", () => {
  const stepContent3 = document.querySelector('#step__content3');
  stepContent3.style.marginLeft = `${contador = -16.73}%`
  stepContent3.classList.add('move__left')
  circleSteps[cont].classList.remove('sidebar__paint')
  circleSteps[cont + 1].classList.add('sidebar__paint')
  cont += 1;
  crearTemplate(parametros)
})

//Código de botones BACK

const stepGoBackTwo = document.querySelector('#step__goBack__two').addEventListener("click", () => {
  const stepContent1 = document.querySelector('#step__content1');
  stepContent1.style.marginLeft = `${contador = 0}%`
  stepContent1.classList.add('move__left')
  circleSteps[cont].classList.remove('sidebar__paint')
  circleSteps[cont - 1].classList.add('sidebar__paint')
  cont -= 1
})

const stepGoBackThree = document.querySelector('#step__goBack__three').addEventListener("click", () => {
  const stepContent2 = document.querySelector('#step__content2');
  stepContent2.style.marginLeft = `${contador = 0}%`
  stepContent2.classList.add('move__left')
  circleSteps[cont].classList.remove('sidebar__paint')
  circleSteps[cont - 1].classList.add('sidebar__paint')
  cont -= 1
})

//Página 1...
//Inputs

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');


const toggle = document.querySelector('#toggle');

//Errors
const errorNombre = document.querySelector('.step__error__nombre');
const errorEmail = document.querySelector('.step__error__email');
const errorPhone = document.querySelector('.step__error__phone');
//Funciones

const validar = () => {
  let validado = true;
  const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const patron = new RegExp(regExpEmail);
  if ((inputName.value.trim() === "" || inputName.value.trim().length < 3)) {
    errorNombre.style.display = "inline-block";
    inputName.style.border = "1px solid red";
    validado = false
  } else if (inputName.value.trim().length >= 3) {
    errorNombre.style.display = "none";
    inputName.style.border = "1px solid green"
  }

  if (patron.test(inputEmail.value)) {
    errorEmail.style.display = "none";
    inputEmail.style.border = "1px solid green"
    validado = false
  } else {
    errorEmail.style.display = "inline-block";
    inputEmail.style.border = "1px solid red"
  }

  if (inputPhone.value.trim().length === 0 || inputPhone.value.trim().length < 6) {
    errorPhone.style.display = "inline-block";
    inputPhone.style.border = "1px solid red"
    validado = false
  } else {
    errorPhone.style.display = "none";
    inputPhone.style.border = "1px solid green"
  }

  if(inputName.value !== "" && inputEmail !== "" && inputPhone !== "" && validado) {
    document.querySelector('#btn__one').classList.remove("step__btn--disabled")
    // console.log(validado);
  }
}

//Listeners
inputName.addEventListener("keyup", validar)
inputEmail.addEventListener("keyup", validar)
inputPhone.addEventListener("keyup", validar)

const radios = document.querySelectorAll('.check__step__2')
const plan = document.querySelectorAll('.plan')
const text = document.querySelectorAll('.plan .plan__description__text')

const misRadios = (objeto) => {
  document.querySelector('#toggle').addEventListener("change", (e) => {
    if (e.target.checked) {
      objeto[0].toggle = "Yearly";
    } else {
      objeto[0].toggle = "Monthly";
    }
  })
  radios.forEach((elem, index) => {
    elem.addEventListener("change", (e) => {
      clean(plan);
      if (e.target.checked) {
        plan[index].classList.add("border")
        objeto[0].plan = text[index].textContent;
        objeto[0].pricePlan = parseInt(e.target.value)
        misChecks(objeto)
      }
    })
  })
}

const clean = (elem) => {
  elem.forEach(el => {
    el.classList.remove("border")
  });
}

const pickCheck = document.querySelectorAll('.pick__check');
const pick = document.querySelectorAll('.pick');
const pickText = document.querySelectorAll('.pick .pick__description__text')

const misChecks = (objeto) => {
  pickCheck.forEach((elem, index) => {
    elem.addEventListener("change", (e) => {
      if (e.target.checked) {
        pick[index].classList.add("border")
        objeto[0].checks[index].title = pickText[index].textContent;
        objeto[0].checks[index].price = parseInt(e.target.value);
      } else {
        pick[index].classList.remove("border")
        objeto[0].checks[index].title = "";
        objeto[0].checks[index].price = 0;
      }
    })
  })
}

const crearTemplate = (data) => {
  const step4 = document.querySelector('#step__content4');
  let template = document.createElement('DIV');
  template.setAttribute("id", "content__step__four");
  template.innerHTML = '';
  let val, miTotal
  for (datos of data) {
    val = datos.pricePlan
    for (let i = 0; i < data[0].checks.length; i++) {
      miTotal = val += data[0].checks[i].price
    }
    template.innerHTML = `
      <section class="step">
        <div class="step__wrapper">
          <article class="step__title">
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
          </article>
          <article class="finishing finishing__border">
            <div class="finishing__description">
              <div class="finishing__description__text">${datos.plan} (${datos.toggle})</div>
              <div class="finishing__description__sub">Change</div>
            </div>
            <div class="finishing__description__price finishing__description__price--bold">$${datos.pricePlan}/mo</div>
          </article>
          <article class="finishing finishing--noMargin">
            <div class="finishing__description__sub">${datos.checks[0].title}</div>
            <div class="finishing__description__price">+$${datos.checks[0].price}/mo</div>
          </article>
          <article class="finishing finishing--noMargin">
            <div class="finishing__description__sub">${datos.checks[1].title}</div>
            <div class="finishing__description__price">+$${datos.checks[1].price}/mo</div>
          </article>
          <article class="finishing finishing--noMargin">
            <div class="finishing__description__sub">${datos.checks[2].title}</div>
            <div class="finishing__description__price">+$${datos.checks[2].price}/mo</div>
          </article>
          <article class="finishing">
            <div class="finishing__description__sub">Total (per month)</div>
            <div class="finishing__total__price">+$${miTotal}/mo</div>
          </article>
        </div>
      </section>
      <div class="step__fill">
        <div class="step__content__btn step__content__btn--flex">
          <button type="button" class="step__btn step__btn--back" id="step__goBack__four" tabindex="-1">Go Back</button>
          <button type="button" class="step__btn step__btn--confirm" id="btn__four" tabindex="-1">Confirm</button>
        </div>
      </div>
      `
  }
  step4.appendChild(template);

  const stepGoBackFour = document.querySelector('#step__goBack__four').addEventListener("click", () => {
    const stepContent3 = document.querySelector('#step__content3');
    stepContent3.style.marginLeft = `${contador = 0}%`
    stepContent3.classList.add('move__left')
    circleSteps[cont].classList.remove('sidebar__paint')
    circleSteps[cont - 1].classList.add('sidebar__paint')
    cont -= 1
    template.remove()
  })

  const btn4 = document.querySelector('#btn__four').addEventListener("click", () => {
    const stepContent4 = document.querySelector('#step__content4');
    stepContent4.style.marginLeft = `${contador = -16.73}%`
    stepContent4.classList.add('move__left')
  })
}

