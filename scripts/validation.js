const validations = () =>{
  const formName = document.querySelector('.form-name');
  const formNumber = document.querySelector('.form-number');
  const agreement = document.querySelector('.form-checkbox__agreement');
  const region = document.querySelector('.form-region');
  const city = document.querySelector('.form-city');
  const paymentMethods = document.querySelectorAll('.form-method__wrapper input[type="radio"]');

  let result = true;
  let resultPaymentMethods = Array.from(paymentMethods).some(input => input.checked);

  if (formName.value === "") {
    createError(formName)
    result = false
  } else {
    removeError(formName)
  }

  if (formNumber.value === "") {
    createError(formNumber)
    result = false
  } else {
    removeError(formNumber)
  }

  if (region.value === "none") {
    createErrorForSelect(region)
    result = false
  } else {
    removeError(region)
  }

  if (city.value === "none") {
    createErrorForSelect(city)
    result = false
  } else {
    removeError(city)
  }

  if (agreement.checked === false) {
    createErrorForAgreement(agreement)
    result = false
  } else {
    removeError(agreement)
  }

  if (resultPaymentMethods === false) {
    createErrorForRadioButton()
    result = false
  } else {
    removeErrorForRadioButton()
  }

  return result

};

document.querySelector('.form-add-city').addEventListener('keyup', (event) => {

  if (event.keyCode === 13 && event.target.value.trim() !== '') { /*если нажата клавиша enter и введен текс без пбелов*/

    addNewCity(event.target.value); /*добавляет город*/

    event.target.value = ''; /*очищает поле ввода после добавления*/
  }
});

const addNewCity = (cityName) => {
  const formCitySelect = document.querySelector('.form-city');

  const newOption = document.createElement('option'); /*создает новый ЭЛЕМЕНТ option*/
  newOption.value = cityName;
  newOption.text = cityName;

  formCitySelect.appendChild(newOption); /*добавляет новый option в select*/

  formCitySelect.value = cityName;/*выбирает новый option*/

  removeError(formCitySelect);
}

const removeError = (htmlElement) => {
  const parent = htmlElement.parentNode; /* ищет родителя*/

  const errorLabel = parent.querySelector('.error-label');/*у родителя находит элемент с классом*/

  htmlElement.classList.remove('error');/*убирает класс у элемента который мы передали(input, select... может быть любой элемент*/
  parent.removeChild(errorLabel);/*у родителя удаляем ребенка который лежит в переменной errorLabel*/
  parent.classList.remove('error-label');/*удаляем класс у родителя*/
};

const removeErrorForRadioButton = () => {
  const wrapper = document.querySelector('.form-method__wrapper');

  const errorLabel = wrapper.querySelector('.error-label');

  wrapper.classList.remove('error');
  wrapper.removeChild(errorLabel);
  wrapper.classList.remove('error-label');
};

const createErrorForRadioButton = () => {

  const wrapper = document.querySelector('.form-method__wrapper');

  const currentErrorLabel = wrapper.querySelector('.error-label');/*ессли элемент с классом error-label найден вернит этот элемент если такой элемент отсутствует вернет null.*/

  if (!currentErrorLabel) {
    wrapper.classList.add('error-label');
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.textContent = 'Выберите способ оплаты!';
    wrapper.append(errorLabel);
  }
}

const createErrorForAgreement = (htmlElement) => {

  const parent = htmlElement.parentNode;   /*берет родителя*/

  const currentErrorLabel = parent.querySelector('.error-label');/*ессли элемент с классом error-label найден вернит этот элемент если такой элемент отсутствует вернет null.*/

  if (!currentErrorLabel) {
    parent.classList.add('error-label');   /*добавляет класс элементу в переменной parent*/
    const errorLabel = document.createElement('label')   /*создает элемент label*/
    errorLabel.classList.add('error-label');   /*добавляет classlist элементу созданному ранее*/
    errorLabel.textContent = 'Подтвердите согласие на обработку данных!';   /*меняет такс у элемента лежащего в errorlabel*/
    parent.append(errorLabel)  /*вставляет элемент в html разметку*/
    htmlElement.classList.add('error')
  }
}

const createError = (htmlElement) => {

  const parent = htmlElement.parentNode;   /*берет родителя*/

  const currentErrorLabel = parent.querySelector('.error-label');/*ессли элемент с классом error-label найден вернит этот элемент если такой элемент отсутствует вернет null.*/

  if (!currentErrorLabel) { /*если currentErrorLabel null элемент error-label не был найден то !currentErrorLabel станет true и if выполнится, если элемент error-label был найден то !currentErrorLabel будет false и if не выполнится  */
  parent.classList.add('error-label');   /*добавляет класс элементу в переменной parent*/
  const errorLabel = document.createElement('label')   /*создает элемент label*/
  errorLabel.classList.add('error-label');   /*добавляет classlist элементу созданному ранее*/
  errorLabel.textContent = 'Поле не заполнено!';   /*меняет такс у элемента лежащего в errorlabel*/
  parent.append(errorLabel); /*вставляет элемент в html разметку*/
  htmlElement.classList.add('error');
  // console.log(currentErrorLabel)
  }
}

const createErrorForSelect = (htmlElement) => {

  const parent = htmlElement.parentNode;
  const value = parent.value

  const currentErrorLabel = parent.querySelector('.error-label');/*ессли элемент с классом error-label найден вернит этот элемент если такой элемент отсутствует вернет null.*/

  if (!currentErrorLabel) {
    parent.classList.add('error-label');   /*добавляет класс элементу в переменной parent*/
    const errorLabel = document.createElement('label')   /*создает элемент label*/
    errorLabel.classList.add('error-label');   /*добавляет classlist элементу созданному ранее*/
    errorLabel.textContent = 'Местоположение не выбрано!';   /*меняет такс у элемента лежащего в errorlabel*/
    parent.append(errorLabel)  /*вставляет элемент в html разметку*/
    htmlElement.classList.add('error')
  }
}

document.querySelector('.form-wrapper').addEventListener('submit', event => {
  event.preventDefault();

  if (validations() === true) {
  alert('Форма проверена успешно')
  } 
});
