'use strict';
(function () {
  // Хэш-теги
  window.textHashtags = document.querySelector('.text__hashtags');
  var MIN_HASHTAG_LENGTH = 2;
  var MAX_HASHTAG_LENGTH = 20;
  var MAX_HASHTAG_COUNT = 5;

  // Валидация формы #
  window.textHashtags.addEventListener('input', function (evt) {
    var target = evt.target.value.trim();
    var arryTargets = target.split(' ');
    for (var k = 0; k < arryTargets.length; k++) {
      var item = arryTargets[k];
      var fromLetters = item.split('');
      if (fromLetters[0] !== '#') {
        window.textHashtags.setCustomValidity('хэш-тег должен начинается с символа \'#\' (решётка)');
      } else if (fromLetters.length < MIN_HASHTAG_LENGTH) {
        window.textHashtags.setCustomValidity('хэш-тег не может состоять только из одной решётки');
      } else if (arryTargets[k].length > MAX_HASHTAG_LENGTH) {
        window.textHashtags.setCustomValidity('максимальная длина одного хэштега не должна превышать 20 символов, включая решётку');
      } else if (arryTargets.length > MAX_HASHTAG_COUNT) {
        window.textHashtags.setCustomValidity('нельзя указать больше пяти хэш-тегов');
      } else if (repeatSearch(arryTargets)) {
        window.textHashtags.setCustomValidity('один и тот же хэш-тег нельзя использовать дважды');
      } else if (arryTargets[k].indexOf('#', 1) !== -1) {
        window.textHashtags.setCustomValidity('хэш-теги должны разделятся пробелом');
      } else {
        window.textHashtags.setCustomValidity('');
      }
    }
  });

  // проверка на повторения #
  var repeatSearch = function (array) {
    for (var q = 0; q < array.length; q++) {
      var elementToCheck = array[q].toLowerCase();
      for (var e = 0; e < array.length; e++) {
        if (q !== e && elementToCheck === array[e].toLowerCase()) {
          return true;
        }
      }
    }
    return false;
  };
})();
