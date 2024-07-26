const track = document.querySelector('.autopark-slider__track');
const items = document.querySelectorAll('.autopark-slider__item');
const nextButton = document.querySelector('.arrow-right');
const prevButton = document.querySelector('.arrow-left');
const itemElements = document.querySelectorAll('.autopark-item');
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
  nextButton.style.display = currentIndex === items.length - 1 ? 'none' : '';
}

function updateActiveItem() {
  itemElements.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

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