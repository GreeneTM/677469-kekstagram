'use strict';
(function () {
  // close BigPicture
  var bigPictureCancel = document.querySelector('.big-picture__cancel');
  bigPictureCancel.addEventListener('click', function () {
    window.bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      window.bigPicture.classList.add('hidden');
    }
  });
})();

