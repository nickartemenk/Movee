const dropDown = document.querySelector('.form-service__title-arrow')
const dropArrow = document.querySelector('.form-service__arrow')
const service = document.querySelector('.form-service__wrapper')
const timerBtn = document.querySelector('.form-timer-button')

dropDown.addEventListener('click', ()=> {
    service.classList.toggle('hidden')
    dropArrow.classList.toggle('active')
    timerBtn.classList.toggle('open-form-service')
})
