export const renderOutputPicThumb = (data) => {

  const picFragment = document.createDocumentFragment();
  const picContainer = document.querySelector('.pictures');

  const TAG_IMAGE_WIDTH = 182;
  const TAG_IMAGE_HEIGHT = 182;

  data.forEach((el) => {

    const picTagA = document.createElement('a');
    picTagA.setAttribute('href', '#');
    picTagA.classList.add('picture');
    picTagA.setAttribute('data-id', el.id);

    const picTagImg = document.createElement('img');
    picTagImg.classList.add('picture__img');
    picTagImg.setAttribute('src', el.url);
    picTagImg.setAttribute('width', TAG_IMAGE_WIDTH);
    picTagImg.setAttribute('height', TAG_IMAGE_HEIGHT);
    picTagImg.setAttribute('alt', el.description);
    picTagA.append(picTagImg);

    const picTagPInfo = document.createElement('p');
    picTagPInfo.classList.add('picture__info');
    picTagA.append(picTagPInfo);

    const picTagSpanComments = document.createElement('span');
    picTagSpanComments.classList.add('picture__comments');
    picTagSpanComments.textContent = el.comments.length;
    picTagPInfo.append(picTagSpanComments);

    const picTagSpanLikes = document.createElement('span');
    picTagSpanLikes.classList.add('picture__likes');
    picTagSpanLikes.textContent = el.likes;
    picTagPInfo.append(picTagSpanLikes);

    picFragment.append(picTagA);

  });

  picContainer.append(picFragment);

};
