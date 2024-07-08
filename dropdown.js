const dropArrow = document.querySelector('.form-service__arrow')
const service = document.querySelector('.form-service__wrapper')
const timerMarg =document.querySelector('.form-timer-button')

dropArrow.addEventListener('click', ()=> {
    service.classList.toggle('form-service-none')
    dropArrow.classList.toggle('form-service__arrow-rotate')
    timerMarg.classList.toggle('timerMarg')
})
