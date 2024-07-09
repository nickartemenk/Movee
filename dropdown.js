const dropArrow = document.querySelector('.form-service__arrow')
const service = document.querySelector('.form-service__wrapper')
const timerBtn =document.querySelector('.form-timer-button')

dropArrow.addEventListener('click', ()=> {
    service.classList.toggle('hidden')
    dropArrow.classList.toggle('active')
    timerBtn.classList.toggle('open-form-service')
})
