'use strict';
(function () {

  var pictures = document.querySelector('.pictures');
  var templatePictures = document.querySelector('#picture').content.querySelector('a');
  var fragment = document.createDocumentFragment();
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = bigPicture.querySelector('img');
  var likesCount = bigPicture.querySelector('.likes-count');
  var socialCaption = bigPicture.querySelector('.social__caption');
  var commentsCount = bigPicture.querySelector('.comments-count');
  var socialComments = bigPicture.querySelector('.social__comments');

  var photoClickHandle = function (photos, evt) {
    var index = evt.currentTarget.dataset.index;
    var currentPhoto = photos[index];
    bigPictureImg.src = currentPhoto.url;
    socialCaption.textContent = currentPhoto.descriptionList;
    commentsCount.textContent = currentPhoto.comments.length;
    likesCount.textContent = currentPhoto.likes;
    socialComments.innerHTML = '';
    for (var j = 0; j < currentPhoto.comments.length; j++) {
      var currentComment = currentPhoto.comments[j];
      socialComments.insertAdjacentHTML('beforeend', '<li class="social__comment">\n <img class="social__picture" src="' + currentComment.avatar + '"\n alt="Аватар комментатора фотографии"\n width="35" height="35">\n <p class="social__text">' + currentComment.message + '</p>\n </li>');

    }
    window.bigPicture.classList.remove('hidden');
  };
  var renderPhotos = (function (photos) {
    for (var i = 0; i < photos.length; i++) {
      var currentPhoto = photos[i];
      var element = templatePictures.cloneNode(true);
      element.dataset.index = i;
      element.querySelector('img').src = currentPhoto.url;
      element.querySelector('.picture__likes').textContent = currentPhoto.likes;
      element.querySelector('.picture__comments').textContent = currentPhoto.comments.length;

      element.addEventListener('click', function (evt) {
        photoClickHandle(photos, evt);
      });
      fragment.appendChild(element);
    }
    pictures.appendChild(fragment);
  });

  var errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
  var successModalTemplate = document.querySelector('#success').content.querySelector('.success');
  var mainElement = document.querySelector('main');
  var errorButton = document.querySelector('.error__button');
  var successButton = document.querySelector('.success__button');
  var uploadCancel = document.querySelector('#upload-cancel');

  window.backend.download(renderPhotos);
  window.bigPicture = bigPicture;
})();

