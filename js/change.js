'use strict';
(function () {
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
