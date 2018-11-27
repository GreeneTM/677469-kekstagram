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
  if (randomInteger(1, 2) > 1) {
    var lineComments = randomElementFromArray(commentsList) + ' ' + randomElementFromArray(commentsList);
    return lineComments;
  } else {
    lineComments = randomElementFromArray(commentsList);
    return lineComments;
  }
};

var randomListFromComment = function () {
  var utterances = [];
  for (var i = 0; i < randomInteger(1, 6); i++) {
    utterances[i] = makesComment();
  }
  return utterances;
};

var generatesAnArray = function () {
  var photos = [];
  for (var i = 0; i < NUMBER_OF_PHOTOS; i++) {
    photos[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(15, 200),
      comments: randomListFromComment(),
      description: randomElementFromArray(descriptionList)
    };
  }
  return photos;
};

var photos = generatesAnArray();

var pictures = document.querySelector('.pictures');
var templatePictures = document.querySelector('#picture').content.querySelector('a');
var fragment = document.createDocumentFragment();

for (var i = 0; i < photos.length; i++) {
  var indexpPhotos = photos[i];
  var element = templatePictures.cloneNode(true);
  element.querySelector('img').src = indexpPhotos.url;
  element.querySelector('.picture__likes').textContent = indexpPhotos.likes;
  element.querySelector('.picture__comments').textContent = indexpPhotos.comments.length;
  fragment.appendChild(element);
}
pictures.appendChild(fragment);

var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

var firstPhotos = photos[0];
var bigPictureImg = bigPicture.querySelector('img');
var likesCount = bigPicture.querySelector('.likes-count');
var socialCaption = bigPicture.querySelector('.social__caption');
var commentsCount = bigPicture.querySelector('.comments-count');
bigPictureImg.src = firstPhotos.url;
likesCount.textContent = firstPhotos.likes;
socialCaption.textContent = firstPhotos.description;
commentsCount.textContent = firstPhotos.comments.length;

var socialComments = bigPicture.querySelector('.social__comments');
socialComments.insertAdjacentHTML('beforeend', '<li class="social__comment">\n' +
  '  <img class="social__picture" ' +
  'src="img/avatar-' + randomInteger(1, 6) + '.svg"\n' +
  '    alt="Аватар комментатора фотографии"\n' +
  '    width="35" height="35">\n' +
  '    <p class="social__text">' + randomElementFromArray(commentsList) + '</p>\n' +
  '</li>');

var socialCommentCount = bigPicture.querySelector('.social__comment-count');
socialCommentCount.classList.add('visually-hidden');
var commentsLoader = bigPicture.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');
