'use strict';
(function () {
  var URL = {
    DOWLOAD: 'https://js.dump.academy/kekstagram/data',
    UPLOAD: 'https://js.dump.academy/kekstagram'
  };

  var setup = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('ошибка загрузки');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Ошибка ответа: ' + xhr.status + ' ' + xhr.statusText);
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  var download = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    setup(xhr, onLoad, onError);
    xhr.open('GET', URL.DOWLOAD);
    xhr.send();
  };

  var upload = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    setup(xhr, onLoad, onError);
    xhr.open('POST', URL.UPLOAD);
    xhr.send(data);
  };
  window.backend = {
    download: download,
    upload: upload
  };
})();

