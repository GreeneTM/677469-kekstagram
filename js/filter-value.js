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
})();
