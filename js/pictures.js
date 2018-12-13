'use strict';
(function () {
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
  window.bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = window.bigPicture.querySelector('img');
  var likesCount = window.bigPicture.querySelector('.likes-count');
  var socialCaption = window.bigPicture.querySelector('.social__caption');
  var commentsCount = window.bigPicture.querySelector('.comments-count');
  var socialComments = window.bigPicture.querySelector('.social__comments');

  for (var i = 0; i < photos.length; i++) {
    var indexPhotos = photos[i];
    var element = templatePictures.cloneNode(true);
    element.querySelector('img').src = indexPhotos.url;
    element.querySelector('.picture__likes').textContent = indexPhotos.likes;
    element.querySelector('.picture__comments').textContent = indexPhotos.comments.length;

    element.addEventListener('click', function (evt) {
      bigPictureImg.src = evt.target.src;
      socialCaption.textContent = randomElementFromArray(descriptionList);
      commentsCount.textContent = evt.srcElement.nextElementSibling.children[0].textContent;
      likesCount.textContent = evt.srcElement.nextElementSibling.children[1].textContent;
      socialComments.insertAdjacentHTML('beforeend', '<li class="social__comment">\n <img class="social__picture" src="img/avatar-' + randomInteger(1, 6) + '.svg"\n alt="Аватар комментатора фотографии"\n width="35" height="35">\n <p class="social__text">' + randomElementFromArray(commentsList) + '</p>\n </li>');
      window.bigPicture.classList.remove('hidden');
    });
    fragment.appendChild(element);
  }
  pictures.appendChild(fragment);
})();

