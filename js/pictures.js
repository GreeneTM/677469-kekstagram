'use strict';
var NUMBER_OF_PHOTOS = 25;
var ESC_KEYCODE = 27;

var commentsList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var descriptionList = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

var randomElementFromArray = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var randomInteger = function (min, max) {
  var rand = Math.floor(min + Math.random() * (max + 1 - min));
  return rand;
};

var makesComment = function () {
  var minCommentValue = 1;
  var maxCommentValue = 2;
  var lineComments;
  if (randomInteger(minCommentValue, maxCommentValue) > minCommentValue) {
    lineComments = randomElementFromArray(commentsList) + ' ' + randomElementFromArray(commentsList);
    return lineComments;
  } lineComments = randomElementFromArray(commentsList);
  return lineComments;
};

var creatingComments = function () {
  var comments = [];
  for (var i = 0; i < randomInteger(1, 6); i++) {
    comments[i] = makesComment();
  }
  return comments;
};

var generatesAnArray = function () {
  var photos = [];
  for (var i = 0; i < NUMBER_OF_PHOTOS; i++) {
    photos[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(15, 200),
      comments: creatingComments(),
      description: randomElementFromArray(descriptionList)
    };
  }
  return photos;
};

var photos = generatesAnArray();

var pictures = document.querySelector('.pictures');
var templatePictures = document.querySelector('#picture').content.querySelector('a');
var fragment = document.createDocumentFragment();
var bigPicture = document.querySelector('.big-picture');
var bigPictureImg = bigPicture.querySelector('img');
var likesCount = bigPicture.querySelector('.likes-count');
var socialCaption = bigPicture.querySelector('.social__caption');
var commentsCount = bigPicture.querySelector('.comments-count');
var socialComments = bigPicture.querySelector('.social__comments');

for (var i = 0; i < photos.length; i++) {
  var indexpPhotos = photos[i];
  var element = templatePictures.cloneNode(true);
  element.querySelector('img').src = indexpPhotos.url;
  element.querySelector('.picture__likes').textContent = indexpPhotos.likes;
  element.querySelector('.picture__comments').textContent = indexpPhotos.comments.length;

  element.addEventListener('click', function (evt) {
    bigPictureImg.src = evt.target.src;
    socialCaption.textContent = randomElementFromArray(descriptionList);
    commentsCount.textContent = evt.srcElement.nextElementSibling.children[0].textContent;
    likesCount.textContent = evt.srcElement.nextElementSibling.children[1].textContent;
    socialComments.insertAdjacentHTML('beforeend', '<li class="social__comment">\n <img class="social__picture" src="img/avatar-' + randomInteger(1, 6) + '.svg"\n alt="Аватар комментатора фотографии"\n width="35" height="35">\n <p class="social__text">' + randomElementFromArray(commentsList) + '</p>\n </li>');
    bigPicture.classList.remove('hidden');
  });
  fragment.appendChild(element);
}
pictures.appendChild(fragment);

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
  if (evt.keyCode === ESC_KEYCODE) {
    imgUploadOverlay.classList.add('hidden');
  }
});

// Смена фильтров
var effectLevelValue = document.querySelector('.effect-level__value');
var imgUploadPreview = document.querySelector('.img-upload__preview');
var effectsItems = document.querySelectorAll('.effects__item');
var appliedClass = 'effects__preview--none';
imgUploadPreview.classList.add(appliedClass);

for (var j = 0; j < effectsItems.length; j++) {
  effectsItems[j].addEventListener('change', function (evt) {
    var inputValue = evt.target.value;
    imgUploadPreview.classList.remove(appliedClass);
    appliedClass = 'effects__preview--' + inputValue;
    imgUploadPreview.classList.add(appliedClass);
    onEffectSliderPinUp(100);
  });
}

var levelPin = document.querySelector('.effect-level__pin');
var levelLine = document.querySelector('.effect-level__line');

// функция value
var handleMouseUpLevelPin = function () {
  var offsetLeft = levelPin.offsetLeft;
  var fullWidthLevelLine = levelLine.clientWidth;
  var effectValue = Math.round((offsetLeft * 100) / fullWidthLevelLine);
  onEffectSliderPinUp(effectValue);
};

levelPin.addEventListener('mouseup', handleMouseUpLevelPin);

// классы & эффекты
var onEffectSliderPinUp = function (percent) {
  effectLevelValue.value = percent;
  var effectClass = imgUploadPreview.classList[1];
  switch (effectClass) {
    case 'effects__preview--none':
      imgUploadPreview.style.filter = '';
      break;
    case 'effects__preview--chrome':
      imgUploadPreview.style.filter = 'grayscale(' + (percent / 100) + ')';
      break;
    case 'effects__preview--sepia':
      imgUploadPreview.style.filter = 'sepia(' + (percent / 100) + ')';
      break;
    case 'effects__preview--marvin':
      imgUploadPreview.style.filter = 'invert(' + percent + '%' + ')';
      break;
    case 'effects__preview--phobos':
      imgUploadPreview.style.filter = 'blur(' + (percent / 100) * 3 + 'px' + ')';
      break;
    case 'effects__preview--heat':
      imgUploadPreview.style.filter = 'brightness(' + (percent / 100) * 3 + 1 + ')';
      break;
  }
};

// close BigPicture
var bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    bigPicture.classList.add('hidden');
  }
});

// масштаб
var btnScaleControlSmaller = document.querySelector('.scale__control--smaller'); // кнопка уменьшить
var btnScaleControlBigger = document.querySelector('.scale__control--bigger'); // кнопка увеличить
var inputScaleControlValue = document.querySelector('.scale__control--value'); // значение
inputScaleControlValue.value = 100 + '%';

// функция масштабирует элемент
var onScaleControlValueChange = function (value) {
  imgUploadPreview.style.transform = 'scale(' + value.slice(0, -1) / 100 + ')';
};

// Функция уменьшения масштаба фото
var onBtnScaleControlSmallerClick = function () {
  if (inputScaleControlValue.value.slice(0, -1) > 50) {
    inputScaleControlValue.value = inputScaleControlValue.value.slice(0, -1) - 25 + '%';
  } else {
    inputScaleControlValue.value = 25 + '%';
  }
  onScaleControlValueChange(inputScaleControlValue.value);
};

// Функция увеличение масштаба фото
var onBtnScaleControlBiggerClick = function () {
  if (inputScaleControlValue.value.slice(0, -1) < 76) {
    inputScaleControlValue.value = +inputScaleControlValue.value.slice(0, -1) + 25 + '%';
  } else {
    inputScaleControlValue.value = 100 + '%';
  }
  onScaleControlValueChange(inputScaleControlValue.value);
};

// обработка события
btnScaleControlSmaller.addEventListener('click', onBtnScaleControlSmallerClick);
btnScaleControlBigger.addEventListener('click', onBtnScaleControlBiggerClick);

// Хэш-теги
var textHashtags = document.querySelector('.text__hashtags');

// textHashtags.pattern = '^#[\\w-]+(?:\\s+#[\\w-]+)*$ ';\<#([^\S]+.)\>
// textHashtags.pattern = '^ (# [a-z \\ d -] + \\ s?) + $';
// textHashtags.target.value
// # = Номер в Юникоде U+0023

// Валидация формы #
textHashtags.addEventListener('input', function (evt) {
  var target = evt.target.value.trim();
  var arryTarget = target.split(' ');
  for (var i = 0; i < arryTarget.length; i++) {
    var fromTarget = arryTarget[i];
    var fromLetter = fromTarget.split('');
    if (fromLetter[0] !== '#') {
      textHashtags.setCustomValidity('хэш-тег должен начинается с символа \'#\' (решётка)');
    } else if (fromLetter.length < 2) {
      textHashtags.setCustomValidity('хэш-тег не может состоять только из одной решётки');
    } else if (arryTarget[i].length > 20) {
      textHashtags.setCustomValidity('максимальная длина одного хэштега не должна превышать 20 символов, включая решётку');
    } else if (arryTarget.length > 5) {
      textHashtags.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    } else if (repeatSearch(arryTarget)) {
      textHashtags.setCustomValidity('один и тот же хэш-тег нельзя использовать дважды');
    } else if (arryTarget[i].indexOf('#', 1) !== -1) {
      textHashtags.setCustomValidity('хэш-теги должны разделятся пробелом');
    } else {
      textHashtags.setCustomValidity('');
    }

    console.log('arryTarget', arryTarget);
    console.log('fromLetter', fromLetter);
    console.log(repeatSearch(arryTarget));
    debugger;
  }
});

// проверка на повторения #
var repeatSearch = function (arryTarget) {
  for (var i = 0; i < arryTarget.length; i++) {
    var element = arryTarget[i].toLowerCase();
    console.log('element', element);
    for (var j = 0; j < arryTarget.length; j++) {
      if (i !== j && element === arryTarget[j].toLowerCase()) {
        return true;
      }
    }
  }
  return false;
};

