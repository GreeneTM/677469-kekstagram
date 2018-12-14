'use strict';
(function () {
  // масштаб
  var btnScaleControlSmaller = document.querySelector('.scale__control--smaller'); // кнопка уменьшить
  var btnScaleControlBigger = document.querySelector('.scale__control--bigger'); // кнопка увеличить
  var inputScaleControlValue = document.querySelector('.scale__control--value'); // значение
  inputScaleControlValue.value = 100 + '%';

  // функция масштабирует элемент
  var onScaleControlValueChange = function (value) {
    window.imgUploadPreview.style.transform = 'scale(' + value.slice(0, -1) / 100 + ')';
  };

  // Функция уменьшения масштаба фото
  var onBtnScaleControlSmallerClick = function () {
    if (inputScaleControlValue.value.slice(0, -1) > 50) {
      inputScaleControlValue.value = inputScaleControlValue.value.slice(0, -1) - 25 + '%';
    } else {
      inputScaleControlValue.value = 25 + '%';
    }
    onScaleControlValueChange(inputScaleControlValue.value);
  };

  // Функция увеличение масштаба фото
  var onBtnScaleControlBiggerClick = function () {
    if (inputScaleControlValue.value.slice(0, -1) < 75) {
      inputScaleControlValue.value = +inputScaleControlValue.value.slice(0, -1) + 25 + '%';
    } else {
      inputScaleControlValue.value = 100 + '%';
    }
    onScaleControlValueChange(inputScaleControlValue.value);
  };

  // обработка события
  btnScaleControlSmaller.addEventListener('click', onBtnScaleControlSmallerClick);
  btnScaleControlBigger.addEventListener('click', onBtnScaleControlBiggerClick);
})();
