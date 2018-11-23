'use strict';
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

var randomSelections = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var pictures = [
  {
    url: 'photos/1.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/2.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/3.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/4.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/5.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/6.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/7.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/8.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/9.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/10.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/11.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/12.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/13.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/14.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/15.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/16.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/17.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/18.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/19.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/20.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/21.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/22.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/22.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/23.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/24.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
  {
    url: 'photos/25.jpg',
    likes: randomInteger(15, 20),
    comments: randomSelections(commentsList),
    description: randomSelections(descriptionList)
  },
];

console.log(pictures);
