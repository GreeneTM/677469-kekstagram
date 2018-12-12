'use strict';
(function () {

  window.commentsList = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  window.descriptionList = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
  ];

  window.randomElementFromArray = function (items) {
    return items[Math.floor(Math.random() * items.length)];
  };

  window.randomInteger = function (min, max) {
    var rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
  };

  var makesComment = function () {
    var minCommentValue = 1;
    var maxCommentValue = 2;
    var lineComments;
    if (window.randomInteger(minCommentValue, maxCommentValue) > minCommentValue) {
      lineComments = window.randomElementFromArray(window.commentsList) + ' ' + window.randomElementFromArray(window.commentsList);
      return lineComments;
    } lineComments = window.randomElementFromArray(window.commentsList);
    return lineComments;
  };

  var creatingComments = function () {
    var comments = [];
    for (var i = 0; i < window.randomInteger(1, 6); i++) {
      comments[i] = makesComment();
    }
    return comments;
  };

  var generatesAnArray = function () {
    var photos = [];
    for (var i = 0; i < window.NUMBER_OF_PHOTOS; i++) {
      photos[i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        likes: window.randomInteger(15, 200),
        comments: creatingComments(),
        description: window.randomElementFromArray(window.descriptionList)
      };
    }
    return photos;
  };

  window.photos = generatesAnArray();
})();
