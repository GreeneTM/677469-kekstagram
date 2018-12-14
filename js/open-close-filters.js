'use strict';
(function () {
  var imgUploadOverlay = document.querySelector('.img-upload__overlay');
  var uploadFile = document.querySelector('#upload-file');
  uploadFile.addEventListener('change', function () {
    imgUploadOverlay.classList.remove('hidden');
  });

  var imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');
  imgUploadCancel.addEventListener('click', function () {
    imgUploadOverlay.classList.add('hidden');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      imgUploadOverlay.classList.add('hidden');
    }
  });
})();
