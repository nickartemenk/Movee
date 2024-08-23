const timer = () => {
  const timerElement = document.querySelector('.form-timer');

  let totalSeconds = parseInt(timerElement.textContent.split(':')[0]) * 3600 + // split азбивает строки на массив по разделителю (:) [максимально количество элементов]
    parseInt(timerElement.textContent.split(':')[1]) * 60 +
    parseInt(timerElement.textContent.split(':')[2]);

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

    // обновление текста элемента timerElement
    timerElement.textContent = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');//string преобразует в строку padstart задает минимальное количество символов в строке с нолем слева если это нужно плюс разделитель в виде :
  }, 1000);
}

timer();