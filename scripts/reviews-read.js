const readBtns = document.querySelectorAll('.reviews-read');

readBtns.forEach(readBtn => {
    readBtn.addEventListener('click', () => {
        if (readBtn.textContent === 'Читать полностью') {
            readBtn.textContent = 'Скрыть';
        } else {
            readBtn.textContent = 'Читать полностью';
        }
        readBtn.parentElement.classList.toggle('active')
    });
});