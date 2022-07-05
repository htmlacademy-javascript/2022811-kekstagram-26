import { fotoDescArr } from './data.js';

export const getOutputThumb = () => {

  const picTemplate = document.getElementById('picture');
  const picFragment = document.createDocumentFragment();

  fotoDescArr.forEach((el) => {

    const picTagA = document.createElement('a');
    picTagA.setAttribute('href', '#');
    picTagA.classList.add('picture');

    const picTagImg = document.createElement('img');
    picTagImg.classList.add('picture__img');
    picTagImg.setAttribute('src', el.url);
    picTagImg.setAttribute('width', '182');
    picTagImg.setAttribute('height', '182');
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

  picTemplate.append(picFragment);

};
