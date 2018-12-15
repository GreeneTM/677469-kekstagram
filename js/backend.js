'use strict';
(function () {
  var xhr = new XMLHttpRequest();
  var URL = ' https://js.dump.academy/kekstagram/data';


  var setup = function (xhr, onLoad, onError) {
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('ошибка загрузки');
      }
    });
    xhr.open('GET', URL);
    xhr.send();
  };
})();
