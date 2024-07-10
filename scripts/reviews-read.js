const readBtns = document.querySelectorAll('.reviews-read');

readBtns.forEach(readBtn => {
    readBtn.addEventListener('click', () => {
        if (readBtn.textContent === 'Читать полностью') {
            readBtn.textContent = 'Скрыть'; // Изменяем текст на 'Read Less'
        } else {
            readBtn.textContent = 'Читать полностью'; // Изменяем текст на 'Read More'
        }

        readBtn.parentElement.classList.toggle('active')
    });
});