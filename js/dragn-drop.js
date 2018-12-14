'use strict';
(function () {
  var levelPin = document.querySelector('.effect-level__pin');
  var levelLine = document.querySelector('.effect-level__line');
  var effectLevelDepth = document.querySelector('.effect-level__depth');

  // Drag'n'Drop
  levelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // находим начальные координаты
    var startCoords = evt.clientX;

    // обрабочик движение мыши
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      // движения полоски за ползунком
      var offsetLeft = levelPin.offsetLeft;
      var fullWidthLevelLine = levelLine.clientWidth;
      var effectValue = Math.round((offsetLeft * 100) / fullWidthLevelLine);
      // основные вычесления
      effectLevelDepth.style.width = effectValue + '%';
      var shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      levelPin.style.left = (levelPin.offsetLeft - shift) + 'px';
      // остановим его в диапозоне 0-453
      if ((levelPin.offsetLeft - shift) < 0) {
        levelPin.style.left = 0 + 'px';
      } else if ((levelPin.offsetLeft - shift) > levelLine.clientWidth) {
        levelPin.style.left = levelLine.clientWidth + 'px';
      }
    };

    // обробочик отпускание кнопки мыши
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      handleMouseUpLevelPin();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    // вызываем наших обробочиков
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // функция value
  var handleMouseUpLevelPin = function () {
    var offsetLeft = levelPin.offsetLeft;
    var fullWidthLevelLine = levelLine.clientWidth;
    var effectValue = Math.round((offsetLeft * 100) / fullWidthLevelLine);
    window.onEffectSliderPinUp(effectValue);
  };
})();
