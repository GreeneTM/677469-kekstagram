'use strict';
var NUMBER_OF_PHOTOS = 25;

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
  if (evt.keyCode === 27) {
    imgUploadOverlay.classList.add('hidden');
  }
});

// Смена фильтров
var imgUploadPreview = document.querySelector('img');
var effectsItem = document.querySelectorAll('.effects__item');
for (var j = 0; j < effectsItem.length; j++) {
  effectsItem[j].addEventListener('click', function (evt) {
    var appliedClass = 'effects__preview--' + evt.target.value;
    if (imgUploadPreview.className) {
      var previousClass = imgUploadPreview.className;
      imgUploadPreview.classList.remove(previousClass);
      imgUploadPreview.classList.add(appliedClass);
    } imgUploadPreview.classList.add(appliedClass);
  });
}

var bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});

var pinHandle = document.querySelector('.effect-level__pin');

pinHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX
    };

    startCoords = {
      x: moveEvt.clientX
    };

    pinHandle.style.left = (pinHandle.offsetLeft - shift.x) + 'px';
    if ((pinHandle.offsetLeft - shift.x) < 0) {
      pinHandle.style.left = 0 + 'px';
    } else if ((pinHandle.offsetLeft - shift.x) > 450) {
      pinHandle.style.left = 450 + 'px';
    }
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});
