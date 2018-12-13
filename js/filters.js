'use strict';
(function () {
  var effectLevelValue = document.querySelector('.effect-level__value');
  // классы & эффекты
  window.onEffectSliderPinUp = function (percent) {
    effectLevelValue.value = percent;
    var effectClass = window.imgUploadPreview.classList[1];
    switch (effectClass) {
      case 'effects__preview--none':
        window.imgUploadPreview.style.filter = '';
        break;
      case 'effects__preview--chrome':
        window.imgUploadPreview.style.filter = 'grayscale(' + (percent / 100) + ')';
        break;
      case 'effects__preview--sepia':
        window.imgUploadPreview.style.filter = 'sepia(' + (percent / 100) + ')';
        break;
      case 'effects__preview--marvin':
        window.imgUploadPreview.style.filter = 'invert(' + percent + '%' + ')';
        break;
      case 'effects__preview--phobos':
        window.imgUploadPreview.style.filter = 'blur(' + (percent / 100) * 3 + 'px' + ')';
        break;
      case 'effects__preview--heat':
        window.imgUploadPreview.style.filter = 'brightness(' + (percent / 100) * 3 + 1 + ')';
        break;
    }
  };

  // Смена фильтров
  window.imgUploadPreview = document.querySelector('.img-upload__preview');
  var effectsItems = document.querySelectorAll('.effects__item');
  var appliedClass = 'effects__preview--none';
  window.imgUploadPreview.classList.add(appliedClass);

  for (var j = 0; j < effectsItems.length; j++) {
    effectsItems[j].addEventListener('change', function (evt) {
      var inputValue = evt.target.value;
      window.imgUploadPreview.classList.remove(appliedClass);
      appliedClass = 'effects__preview--' + inputValue;
      window.imgUploadPreview.classList.add(appliedClass);
      window.onEffectSliderPinUp(100);
    });
  }

})();
