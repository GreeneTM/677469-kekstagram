'use strict';
(function () {
  var xhr = new XMLHttpRequest();
  console.log('xhr.readyState', xhr.readyState);
  xhr.responseType = 'json';

  xhr.addEventListener('load', function (evt) {
    console.log(evt.target === xhr);
    console.log(xhr.response);
  });
  xhr.open('GET', ' https://js.dump.academy/kekstagram/data');
  console.log('xhr.readyState', xhr.readyState);

  xhr.send();
})();
