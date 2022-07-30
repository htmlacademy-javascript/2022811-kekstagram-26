export const renderOutputPicPopup = (data) => {

  const picThumb = document.querySelectorAll('.picture');
  const picPopup = document.querySelector('.big-picture');
  const picPopupIcoClose = document.querySelector('.big-picture .big-picture__cancel');
  const picPopupImg = document.querySelector('.big-picture__img img');
  const picPopupDesc = document.querySelector('.big-picture__social .social__caption');
  const picPopupLikes = document.querySelector('.big-picture__social .likes-count');
  const picPopupCommentsCount= document.querySelector('.big-picture__social .social__comment-count');
  const picPopupComments= document.querySelector('.big-picture__social .social__comments');

  const TAG_IMAGE_WIDTH = 35;
  const TAG_IMAGE_HEIGHT = 35;

  picThumb.forEach((el) => {

    el.addEventListener('click', () => {

      openPicPopup();

      const picThumbID = Number(el.getAttribute('data-id'));
      const picDescArrResult = data.find((elArrRes) => elArrRes.id === picThumbID);

      picPopupImg.src = picDescArrResult.url;
      picPopupDesc.textContent = picDescArrResult.description;
      picPopupLikes.textContent = picDescArrResult.likes;
      picPopupCommentsCount.classList.add('hidden');

      picDescArrResult.comments.forEach((elArrResComm) => {

        const picPopupCommentTagLi = document.createElement('li');
        picPopupCommentTagLi.classList.add('social__comment');
        picPopupComments.append(picPopupCommentTagLi);

        const picPopupCommentTagImg = document.createElement('img');
        picPopupCommentTagImg.classList.add('social__picture');
        picPopupCommentTagImg.setAttribute('src', elArrResComm.avatar);
        picPopupCommentTagImg.setAttribute('alt', elArrResComm.name);
        picPopupCommentTagImg.setAttribute('width', TAG_IMAGE_WIDTH);
        picPopupCommentTagImg.setAttribute('height', TAG_IMAGE_HEIGHT);
        picPopupCommentTagLi.append(picPopupCommentTagImg);

        const picPopupCommentTagP = document.createElement('p');
        picPopupCommentTagP.classList.add('social__text');
        picPopupCommentTagP.textContent = elArrResComm.message;
        picPopupCommentTagLi.append(picPopupCommentTagP);

      });

    });

  });

  function onPicPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      closePicPopup();
    }
  }

  function openPicPopup() {
    picPopup.classList.remove('hidden');
    document.addEventListener('keyup', onPicPopupEscapeKeydown);
  }

  function closePicPopup() {
    picPopup.classList.add('hidden');
    document.removeEventListener('keyup', onPicPopupEscapeKeydown);
  }

  picPopupIcoClose.addEventListener('click', closePicPopup);

};
