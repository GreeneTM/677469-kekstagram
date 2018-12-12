'use strict';
(function () {
  // Отмена закрытие формы при фокусе
  window.textHashtags.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  });
})();
