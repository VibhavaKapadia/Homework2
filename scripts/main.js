var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function setDetailsnew(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title')
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
var text = new Array(7);
text[0] = "Flex Froggy";
text[1] = "Grid Garden";
text[2] = "Stayin' Alive";
text[3] = "How Deep Is Your Love";
text[4] = "You Should Be Dancing";
text[5] = "Night Fever";
text[6] = "To Love Somebody";




function goback() {
  var x = document.querySelector(DETAIL_IMAGE_SELECTOR);

  var y = document.querySelector(DETAIL_TITLE_SELECTOR);

  array = getThumbnailsArray();

  if (x.src == array[0]) {

    window.alert("This is first image");
  }

  for (i = 1; i < 7; i++) {

    if (x.src == array[i]) {

      z = array[i - 1];

      setDetailsnew(z, text[i - 1])
      break;
    }

  }



}

function gofwd() {
  var x = document.querySelector(DETAIL_IMAGE_SELECTOR);

  array = getThumbnailsArray();

  if (x.src == array[6]) {

    window.alert("This is last image");
  }

  for (i = 0; i < 6; i++) {

    if (x.src == array[i]) {

      z = array[i + 1];
      setDetailsnew(z, text[i + 1]);
      break;
    }

  }
}


function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  //addKeyPressHandler();
}

initializeEvents();
