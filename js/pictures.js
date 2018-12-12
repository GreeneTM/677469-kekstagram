'use strict';
(function () {
  var pictures = document.querySelector('.pictures');
  var templatePictures = document.querySelector('#picture').content.querySelector('a');
  var fragment = document.createDocumentFragment();
  window.bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = window.bigPicture.querySelector('img');
  var likesCount = window.bigPicture.querySelector('.likes-count');
  var socialCaption = window.bigPicture.querySelector('.social__caption');
  var commentsCount = window.bigPicture.querySelector('.comments-count');
  var socialComments = window.bigPicture.querySelector('.social__comments');

  for (var i = 0; i < window.photos.length; i++) {
    var indexPhotos = window.photos[i];
    var element = templatePictures.cloneNode(true);
    element.querySelector('img').src = indexPhotos.url;
    element.querySelector('.picture__likes').textContent = indexPhotos.likes;
    element.querySelector('.picture__comments').textContent = indexPhotos.comments.length;

    element.addEventListener('click', function (evt) {
      bigPictureImg.src = evt.target.src;
      socialCaption.textContent = window.randomElementFromArray(window.descriptionList);
      commentsCount.textContent = evt.srcElement.nextElementSibling.children[0].textContent;
      likesCount.textContent = evt.srcElement.nextElementSibling.children[1].textContent;
      socialComments.insertAdjacentHTML('beforeend', '<li class="social__comment">\n <img class="social__picture" src="img/avatar-' + window.randomInteger(1, 6) + '.svg"\n alt="Аватар комментатора фотографии"\n width="35" height="35">\n <p class="social__text">' + window.randomElementFromArray(window.commentsList) + '</p>\n </li>');
      window.bigPicture.classList.remove('hidden');
    });
    fragment.appendChild(element);
  }
  pictures.appendChild(fragment);
})();

