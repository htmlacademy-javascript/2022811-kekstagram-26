export const showUploadPicForm = () => {

  const picForm = document.getElementById('upload-select-image');
  const picFormUploadFile = document.getElementById('upload-file');
  const picFormPopup = document.querySelector('#upload-select-image .img-upload__overlay');
  const picFormPopupCloseBtn = document.getElementById('upload-cancel');
  const picFormPopupPreview = document.querySelector('#upload-select-image .img-upload__overlay img');
  const picFormPopupHashtags = document.querySelector('#upload-select-image .text__hashtags');
  const picFormPopupDesc = document.querySelector('#upload-select-image .text__description');

  const picFormPopupOpen = () => {
    picFormPopup.classList.remove('hidden');
    document.body.classList.add('modal-open');
  };

  const picFormPopupClose = () => {
    picFormPopup.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  picFormUploadFile.addEventListener('change', (e) => {
    picFormPopupOpen();
    picFormPopupPreview.setAttribute('src', URL.createObjectURL(e.target.files[0]));
  });

  picFormPopupCloseBtn.addEventListener('click', picFormPopupClose);

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

  picFormPopupEffectsList.forEach((el) => {

    el.addEventListener('click', (e) => {
      picFormPopupPreview.removeAttribute('class');
      picFormPopupPreview.classList.add(`effects__preview--${e.target.value}`);
    });

  });

  const successPopup = document.querySelector('.success');

  const successPopupClose = () => {
    successPopup.classList.add('hidden');
  };

  const errorPopup = document.querySelector('.error');

  const errorPopupClose = () => {
    errorPopup.classList.add('hidden');
  };

  document.addEventListener('click', (e) => {
    if (successPopup.contains(e.target)) {
      successPopupClose();
    } else if (errorPopup.contains(e.target)) {
      errorPopupClose();
      picFormPopupOpen();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      picFormPopupClose();
      successPopupClose();
      errorPopupClose();
    }
  });

  picForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    const picFormPopupHashtagsVal = picFormPopupHashtags.value.split(' ');

    if (picFormPopupHashtagsVal.length > 0 && picFormPopupHashtagsVal.length <= 5) {

      for (const el of picFormPopupHashtagsVal) {
        if (re.test(el) === false) {
          return;
        }
      }

    }

    if (picFormPopupDesc < 2 || picFormPopupDesc > 140) {
      return;
    }

    fetch('https://26.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: new FormData(picForm),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error(`${response.status} — ${response.statusText}`);
      })
      .then(() => {
        picFormPopupClose();
        picFormPopupPreview.removeAttribute('class');
        successPopup.classList.remove('hidden');
        picForm.reset();
      })
      .catch(() => {
        picFormPopupClose();
        errorPopup.classList.remove('hidden');
      });

  });

};
