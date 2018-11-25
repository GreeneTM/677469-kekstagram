'use strict';
var NUMBER_OF_OBJECTS = 25;
var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

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

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var generatesAnArray = function () {
  var object = [];
  for (var i = 0; i < NUMBER_OF_OBJECTS; i++) {
    object[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(15, 200),
      comments: randomElementFromArray(commentsList),
      description: randomElementFromArray(descriptionList)
    }
  }
  return object;
};

var photos = generatesAnArray();

var pictures = document.querySelector('.pictures');
var template = document.querySelector('#picture').content.querySelector('a');
var fragment = document.createDocumentFragment();

for (var i = 0; i < photos.length; i++) {

  var element = template.cloneNode(true);
  element.querySelector('img').src = photos[i].url;
  element.querySelector('.picture__likes').textContent = photos[i].likes;
  element.querySelector('.picture__comments').textContent = photos[i].comments;
  fragment.appendChild(element);
}
  pictures.appendChild(fragment);


var bigPictureImg = bigPicture.querySelector('img');
var likesCount = bigPicture.querySelector('.likes-count');
var socialCaption = bigPicture.querySelector('.social__caption');
bigPictureImg.src = photos[0].url;
likesCount.textContent = photos[0].likes;
socialCaption.textContent = photos[0].description;

// ------------------------------------------------------------------------;

var socialText = bigPicture.querySelectorAll('.social__text');
socialText[0].textContent = randomElementFromArray(commentsList);
socialText[1].textContent = randomElementFromArray(commentsList);
var socialPicture = bigPicture.querySelectorAll('.social__picture');
socialPicture[1].setAttribute('src', 'img/avatar-' + randomInteger(1, 6) + '.svg');
socialPicture[2].setAttribute('src', 'img/avatar-' + randomInteger(1, 6) + '.svg');
var socialCommentCount = bigPicture.querySelector('.social__comment-count');
socialCommentCount.classList.add('visually-hidden');
var commentsLoader = bigPicture.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');
