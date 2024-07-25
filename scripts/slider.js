document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.autopark-slider');
    const track = document.querySelector('.autopark-slider__track');
    const items = document.querySelectorAll('.autopark-slider__item');
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');
    const itemElements = document.querySelectorAll('.autopark-item');

    let currentIndex = 0;
    let slideWidth;

    function updateSlideWidth() {
        slideWidth = window.innerWidth || document.documentElement.clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        updateArrowVisibility();
        updateActiveItem();
    }

    function updateArrowVisibility() {
        prevButton.style.display = currentIndex === 0 ? 'none' : '';
        nextButton.style.display = currentIndex === items.length - 1 ? 'none' : '';
    }

    function updateActiveItem() {
        itemElements.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    window.addEventListener('resize', updateSlideWidth);

    nextButton.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateSlideWidth();
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlideWidth();
        }
    });

    itemElements.forEach((item, index) => {
        item.addEventListener('click', function () {
            currentIndex = index;
            updateSlideWidth();
        });
    });

    updateSlideWidth();
});