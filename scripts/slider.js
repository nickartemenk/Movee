const track = document.querySelector('.autopark-slider__track');
const sliderItems = document.querySelectorAll('.autopark-slider__item');
const nextButton = document.querySelector('.arrow-right');
const prevButton = document.querySelector('.arrow-left');
const autoParkItems = document.querySelectorAll('.autopark-item');
const dots = document.querySelectorAll('.autopark-dots__wrapper');

let currentIndex = 0;

function updateSlideWidth() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  updateArrowVisibility();
  updateActiveItem();
  activeDots();
}

function updateArrowVisibility() {
  prevButton.style.display = currentIndex === 0 ? 'none' : '';
  nextButton.style.display = currentIndex === sliderItems.length - 1 ? 'none' : '';
}

function updateActiveItem() {
  autoParkItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

nextButton.addEventListener('click', function () {
  if (currentIndex < sliderItems.length - 1) {
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

autoParkItems.forEach((item, index) => {
  item.addEventListener('click', function () {
    currentIndex = index;
    updateSlideWidth();
  });
});

function activeDots() {
  dots.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

dots.forEach((item, index) => {
  item.addEventListener('click', function () {
    currentIndex = index;
    updateSlideWidth();
  });
});