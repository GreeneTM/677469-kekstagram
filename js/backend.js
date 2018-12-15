'use strict';
(function () {
  var URL = {
    DOWLOAD: 'https://js.dump.academy/kekstagram/data'
  };

  var setup = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('ошибка загрузки');
      }
    });
  };

  var download = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    setup(xhr, onLoad, onError);
    xhr.open('GET', URL.DOWLOAD);
    xhr.send();
  };

  window.backend = {
    download: download
  };
})();
// var xhr = new XMLHttpRequest();
//
// var URL = {
//   DOWLOAD: 'https://js.dump.academy/kekstagram/data',
//   UPLOAD: 'https://js.dump.academy/kekstagram'
// };
// xhr.addEventListener('load', function (evt) {
//   console.log(evt.target === xhr);
//   console.log(xhr);
//   console.log(xhr.response[0].likes);
// });
// xhr.responseType = 'json';
// xhr.open ('GET', URL.DOWLOAD);
//
// xhr.send();
