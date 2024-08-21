const timer = () => {
  const hoursElement = document.querySelector('.form-timer__hours');
  const minutesElement = document.querySelector('.form-timer__minutes');
  const secondsElement = document.querySelector('.form-timer__seconds');

  let totalSeconds = //обшее количество секунд которое должно быть рассчитано
    parseInt(hoursElement.textContent) * 3600 + //parseInt преобразует текст внутри элемента в числа и умножаем на 3600-коичество секундв часе
    parseInt(minutesElement.textContent) * 60 +
    parseInt(secondsElement.textContent);

  // console.log(hoursElement.textContent);

  const interval = setInterval(function() { //setInterval вызывает функию регулярно через заданные отрезки времени
    --totalSeconds; //каждую секунду уменьшается на единицу (префиксная и постфиксная форма спросить)

    if (totalSeconds < 0) { // если totalSeconds меньше ноля интервал прекращается
      clearInterval(interval);
      alert('Время истекло!');
      return;
    }

    //расчет текущего времени
    const hours = Math.floor(totalSeconds / 3600); //делит общее количество секунд на количество секунд в одном часе
    const minutes = Math.floor((totalSeconds % 3600) / 60); //с помощью взятия остатка от деления на 3600 получаем количество секунд оставшихся после того как из общего количества секунд были вычтены все часы
    const seconds = totalSeconds % 60; //дает количество секунд оставшихся после того как из общего количества секунд были вычтены все минуты и часы

    // обновление текста элементов
    hoursElement.textContent = String(hours).padStart(2, '0') + ':'; // string преобразует в строку padstart задает минимальное количество символов в строке с нолем слева если это нужно
    minutesElement.textContent = String(minutes).padStart(2, '0') + ':';
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

timer();