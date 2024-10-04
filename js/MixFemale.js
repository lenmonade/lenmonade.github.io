let switch_button = document.getElementById('button-switch')
switch_button.addEventListener('click', function(){
    this.classList.toggle('switch-active');
})


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const femaleSwitch = document.getElementById('female-switch');
const maleSwitch = document.getElementById('male-switch');
const buttonSwitch = document.getElementById('button-switch');

function switchToFemale() {
    buttonSwitch.classList.remove('switch-active');
    femaleSwitch.style.color = 'white';  
    maleSwitch.style.color = '#555';
}

function switchToMale() {
    buttonSwitch.classList.add('switch-active'); 
    maleSwitch.style.color = 'white'; 
    femaleSwitch.style.color = '#555';  
    window.location.href = 'MixMale.html'; 
  }

femaleSwitch.addEventListener('click', switchToFemale);
maleSwitch.addEventListener('click', switchToMale);
