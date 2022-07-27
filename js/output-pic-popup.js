export const renderOutputPicPopup = (data) => {

  const picThumb = document.querySelectorAll('.picture');
  const picPopup = document.querySelector('.big-picture');
  const picPopupIcoClose = document.querySelector('.big-picture .big-picture__cancel');
  const picPopupImg = document.querySelector('.big-picture__img img');
  const picPopupDesc = document.querySelector('.big-picture__social .social__caption');
  const picPopupLikes = document.querySelector('.big-picture__social .likes-count');
  const picPopupCommentsCount= document.querySelector('.big-picture__social .social__comment-count');
  const picPopupComments= document.querySelector('.big-picture__social .social__comments');

  picThumb.forEach((el) => {

    el.addEventListener('click', () => {

      picPopup.classList.remove('hidden');

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
        picPopupCommentTagImg.setAttribute('width', '35');
        picPopupCommentTagImg.setAttribute('height', '35');
        picPopupCommentTagLi.append(picPopupCommentTagImg);

        const picPopupCommentTagP = document.createElement('p');
        picPopupCommentTagP.classList.add('social__text');
        picPopupCommentTagP.textContent = elArrResComm.message;
        picPopupCommentTagLi.append(picPopupCommentTagP);

      });

    });

  });

  const picPopupClose = () => {
    picPopup.classList.add('hidden');
  };

  picPopupIcoClose.addEventListener('click', picPopupClose);

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      picPopupClose();
    }
  });

};
