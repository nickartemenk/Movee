const getInitialTotalSeconds = () => {
  const storageValue = localStorage.getItem('initialTimer'); //извлекает значение с ключом initialtimer если такого ключа нет вернет null

  if (storageValue !== null && !isNaN(storageValue)) { //если storageValue не null и не nan
    return parseInt(storageValue);
  }

  return 1000;
}

// сохраняет значения в LocalStorage
const saveTotalSeconds = (value) => {
  localStorage.setItem('initialTimer', value);
}

let totalSeconds = getInitialTotalSeconds();

const timer = () => {
  const timerElement = document.querySelector('.form-timer');

    if (totalSeconds > 0) {
      --totalSeconds;
      setTimeout(timer, 1000)
      saveTotalSeconds(totalSeconds);
    } else {
      clearTimeout(timer);
      timerElement.classList.add('hidden-after-end')
    }

    //расчет текущего времени
    const hours = Math.floor(totalSeconds / 3600); //делит общее количество секунд на количество секунд в одном часе
    const minutes = Math.floor((totalSeconds % 3600) / 60); //с помощью взятия остатка от деления на 3600 получаем количество секунд оставшихся после того как из общего количества секунд были вычтены все часы
    const seconds = totalSeconds % 60; //дает количество секунд оставшихся после того как из общего количества секунд были вычтены все минуты и часы

    // обновление текста элемента timerElement
    timerElement.textContent = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');//string преобразует в строку padstart задает минимальное количество символов в строке с нолем слева если это нужно плюс разделитель в виде :
}

timer();


// TIMER V2
// const timerElement = document.querySelector('.form-timer');
// const timeDiscountEnd = Date.now() + 100_000;
// let interval;
//
// const countDown = () => {
//   const totalSeconds = +localStorage.getItem('timeDiscountEnd') - Date.now();
//
//   const hours = Math.floor(totalSeconds / (60 * 60000));
//   const minutes = Math.floor(((totalSeconds - hours * 3600000) / 60000) % 60);
//   const seconds = Math.floor(
//     (totalSeconds - (hours * 3600000 + minutes * 60000)) / 1000
//   );
//
//   if (seconds < 1) {
//     clearInterval(interval);
//     console.log('Время истекло!');
//     timerElement.textContent = '';
//     return;
//   }
//
//   timerElement.textContent =
//     String(hours).padStart(2, '0') +
//     ':' +
//     String(minutes).padStart(2, '0') +
//     ':' +
//     String(seconds).padStart(2, '0');
// };
//
// if (localStorage.getItem('timeDiscountEnd')) {
//   if (+localStorage.getItem('timeDiscountEnd') - Date.now() > 0) {
//     interval = setInterval(countDown, 1000);
//   } else {
//     timerElement.textContent = '';
//     clearInterval(interval);
//   }
// } else {
//   localStorage.setItem('timeDiscountEnd', timeDiscountEnd);
//   interval = setInterval(countDown, 1000);
// }