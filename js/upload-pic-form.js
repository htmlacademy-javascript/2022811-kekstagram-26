export const showUploadPicForm = () => {

  const picForm = document.getElementById('upload-select-image');
  const picFormUploadFile = document.getElementById('upload-file');
  const picFormPopup = document.querySelector('#upload-select-image .img-upload__overlay');
  const picFormPopupCloseBtn = document.getElementById('upload-cancel');
  const picFormPopupPreview = document.querySelector('#upload-select-image .img-upload__overlay img');
  const picFormPopupHashtags = document.querySelector('#upload-select-image .text__hashtags');
  const picFormPopupDesc = document.querySelector('#upload-select-image .text__description');
  const picFormPopupUploadBtn = document.getElementById('upload-submit');

  picFormUploadFile.addEventListener('change', () => {
    picFormPopup.classList.remove('hidden');
    document.body.classList.add('modal-open');
    picFormPopupPreview.setAttribute('src', URL.createObjectURL(event.target.files[0]));
  });

  const picFormPopupClose = () => {
    picFormPopup.classList.add('hidden');
    document.body.classList.remove('modal-open');
    picForm.reset();
  };

  picFormPopupCloseBtn.addEventListener('click', picFormPopupClose);

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      picFormPopupClose();
    }
  });

  picFormPopupUploadBtn.addEventListener('submit', (e) => {

    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    const picFormPopupHashtagsVal = picFormPopupHashtags.value.split(' ');

    if (picFormPopupHashtagsVal.length > 0 && picFormPopupHashtagsVal.length <= 5) {
      picFormPopupHashtagsVal.forEach((el) => {
        if (re.test(el) === false) {
          e.preventDefault();
        }
      });
    }

    if (picFormPopupDesc < 2 || picFormPopupDesc > 140) {
      e.preventDefault();
    }

  });

  const picFormPopupScaleFieldset = document.querySelector('#upload-select-image .img-upload__scale');
  const picFormPopupScaleVal = document.querySelector('#upload-select-image .scale__control--value');
  let picFormPopupScaleBaseVal = Number(picFormPopupScaleVal.value.slice(0, -1));
  let picFormPopupScaleFinalVal;

  picFormPopupScaleFieldset.addEventListener('click', (e) => {

    if (e.target.classList[1] === 'scale__control--bigger') {
      if (picFormPopupScaleBaseVal < 100) {
        picFormPopupScaleFinalVal = (picFormPopupScaleBaseVal += 25) / 100;
      }
    } else if (e.target.classList[1] === 'scale__control--smaller') {
      if (picFormPopupScaleBaseVal > 25) {
        picFormPopupScaleFinalVal = (picFormPopupScaleBaseVal -= 25) / 100;
      }
    }

    picFormPopupPreview.style.transform = `scale(${picFormPopupScaleFinalVal})`;
    picFormPopupScaleVal.value = `${picFormPopupScaleFinalVal * 100}%`;

  });

  const picFormPopupEffectsList = document.querySelectorAll('#upload-select-image .effects__list input');
  const picFormPopupEffectsVal = document.querySelector('#upload-select-image .effect-level__value');

  picFormPopupEffectsList.forEach((el) => {

    el.addEventListener('click', (e) => {
      picFormPopupPreview.removeAttribute('class');
      picFormPopupPreview.classList.add(`effects__preview--${e.target.value}`);
      picFormPopupEffectsVal.value = `effects__preview--${e.target.value}`;
    });

  });

};

showUploadPicForm();
