
/*Referencias HTML*/
const container = document.querySelector('.container');
const sidebar_number_1 = document.querySelector('#sidebar__number__1');
const sidebar_number_2 = document.querySelector('#sidebar__number__2');
const sidebar_number_3 = document.querySelector('#sidebar__number__3');
const sidebar_number_4 = document.querySelector('#sidebar__number__4');
const circulos = Array.from(document.querySelectorAll('.sidebar__number'));
/*Contenedores HTM*/
const stepContent = document.querySelector('#step__content');

/*botones HTML */
const btnOne = document.querySelector('#btn__one');
const btnTwo = document.querySelector('#btn__two');
const btnGoBackTwo = document.querySelector('#btn__goBack__two');
const btnThree = document.querySelector('#btn__goBack__three');
const btnGoBackThree = document.querySelector('#btn__goBack__three');
const btnFour = document.querySelector('#btn__four');
const btnGoBackFour = document.querySelector('#btn__goBack__four');

let template = '';



const despitarCirculo = () => {
  circulos.forEach(element => {
    element.classList.remove('sidebar__paint');
  });
}
const pintarCirculo = ( circulo ) => {
  circulo.classList.add('circulo__pintado')
}


btnOne.addEventListener("click", () => {
  stepContent.innerHTML = template
})








 template = `
<section class="step__two">
<section class="step">
  <article class="step__wrapper">
    <article class="step__title">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
    </article>
    <div class="wrapper">
      <div class="wrapper__contain">
        <img src="./assets/images/icon-arcade.svg" class="wrapper__img" alt="icono-arcade">
      </div>
      <div class="wrapper__description">
        <span class="wrapper__description__text">Arcade</span>
        <span class="wrapper__description__gray">$9/mo</span>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper__contain">
        <img src="./assets/images/icon-advanced.svg" class="wrapper__img" alt="icono-arcade">
      </div>
      <div class="wrapper__description">
        <span class="wrapper__description__text">Advanced</span>
        <span class="wrapper__description__gray">$12/mo</span>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper__contain">
        <img src="./assets/images/icon-pro.svg" class="wrapper__img" alt="icono-arcade">
      </div>
      <div class="wrapper__description">
        <span class="wrapper__description__text">Pro</span>
        <span class="wrapper__description__gray">$15/mo</span>
      </div>
    </div>
    <div class="wrap__toggle">
      <div class="wrap__toggle__text">Monthly</div>
      <div>
        <input type="checkbox" class="offscreen" id="toggle">
        <label for="toggle" class="switch"></label>
      </div>
      <div class="wrap__toggle__text wrap__toggle__text--disabled">Yearly</div>
    </div>
  </article>
  <div class="step__fill">
    <div class="step__content__btn step__content__btn--modified">
      <button type="button" class="btn__goBack" id="btn__goBack__two">Go Back</button>
      <button type="button" id="btn__two">Next Step</button>
    </div>
  </div>
</section>
</section>
`