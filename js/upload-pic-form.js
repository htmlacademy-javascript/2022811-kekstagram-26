export const showUploadPicForm = () => {

  const picForm = document.getElementById('upload-select-image');
  const picFormUploadFile = document.getElementById('upload-file');
  const picFormPopup = document.querySelector('#upload-select-image .img-upload__overlay');
  const picFormPopupCloseBtn = document.getElementById('upload-cancel');
  const picFormPopupPreview = document.querySelector('#upload-select-image .img-upload__overlay img');
  const picFormPopupHashtags = document.querySelector('#upload-select-image .text__hashtags');

  function onPicFormPopupOpen() {
    picFormPopup.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keyup', onPicFormPopupEscapeKeydown);
  }

  function onPicFormPopupClose() {
    picFormPopup.classList.add('hidden');
    document.body.classList.remove('modal-open');
    onPicFormReset();
    document.removeEventListener('keyup', onPicFormPopupEscapeKeydown);
  }

  function onPicFormPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      if (document.activeElement !== picFormPopupHashtags) {
        onPicFormPopupClose();
      }
    }
  }

  picFormUploadFile.addEventListener('change', (e) => {
    onPicFormPopupOpen();
    picFormPopupPreview.setAttribute('src', URL.createObjectURL(e.target.files[0]));
  });

  picFormPopupCloseBtn.addEventListener('click', onPicFormPopupClose);

  const picFormPopupScaleFieldset = document.querySelector('#upload-select-image .img-upload__scale');
  const picFormPopupScaleVal = document.querySelector('#upload-select-image .scale__control--value');
  let picFormPopupScaleBaseVal = Number(picFormPopupScaleVal.value.slice(0, -1));
  let picFormPopupScaleFinalVal;

  const SCALE_BASE_VAL = 100;
  const SCALE_MIN_VAL = 25;
  const SCALE_STEP_VAL = 25;

  picFormPopupScaleFieldset.addEventListener('click', (e) => {

    if (e.target.classList[1] === 'scale__control--bigger') {
      if (picFormPopupScaleBaseVal < SCALE_BASE_VAL) {
        picFormPopupScaleFinalVal = (picFormPopupScaleBaseVal += SCALE_STEP_VAL) / 100;
      }
    } else if (e.target.classList[1] === 'scale__control--smaller') {
      if (picFormPopupScaleBaseVal > SCALE_MIN_VAL) {
        picFormPopupScaleFinalVal = (picFormPopupScaleBaseVal -= SCALE_STEP_VAL) / 100;
      }
    }

    picFormPopupPreview.style.transform = `scale(${picFormPopupScaleFinalVal})`;
    picFormPopupScaleVal.value = `${picFormPopupScaleFinalVal * 100}%`;

  });

  const picFormPopupEffectsList = document.querySelectorAll('#upload-select-image .effects__list input');

  function removeAttrClassPicFormPopup() {
    picFormPopupPreview.removeAttribute('class');
  }

  picFormPopupEffectsList.forEach((el) => {

    el.addEventListener('click', (e) => {
      removeAttrClassPicFormPopup();
      picFormPopupPreview.classList.add(`effects__preview--${e.target.value}`);
    });

  });

  const successPopup = document.querySelector('.success');

  function onSuccessPopupOpen() {
    successPopup.classList.remove('hidden');
    document.addEventListener('keyup', onSuccessPopupEscapeKeydown);
  }

  function onSuccessPopupClose() {
    successPopup.classList.add('hidden');
    document.removeEventListener('keyup', onSuccessPopupEscapeKeydown);
  }

  function onSuccessPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      onSuccessPopupClose();
    }
  }

  const errorPopup = document.querySelector('.error');

  function onErrorPopupOpen() {
    errorPopup.classList.remove('hidden');
    document.addEventListener('keyup', onErrorPopupEscapeKeydown);
  }

  function onErrorPopupClose() {
    errorPopup.classList.add('hidden');
    document.removeEventListener('keyup', onErrorPopupEscapeKeydown);
  }

  function onErrorPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      onErrorPopupClose();
    }
  }

  function onPicFormReset() {
    picForm.reset();
    removeAttrClassPicFormPopup();
  }

  document.addEventListener('click', (e) => {
    if (successPopup.contains(e.target)) {
      onSuccessPopupClose();
    } else if (errorPopup.contains(e.target)) {
      onErrorPopupClose();
      onPicFormPopupOpen();
    }
  });

  const HASHTAG_MIN_LENGTH = 1;
  const HASHTAG_MAX_LENGTH = 19;
  const HASHTAG_MIN_COUNT = 0;
  const HASHTAG_MAX_COUNT = 5;

  picForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const pattern = `^#[A-Za-zА-Яа-яЁё0-9]{${HASHTAG_MIN_LENGTH},${HASHTAG_MAX_LENGTH}}`;
    const regex = new RegExp(pattern);

    const picFormPopupHashtagsVal = picFormPopupHashtags.value.split(' ');

    if (picFormPopupHashtagsVal.length > HASHTAG_MIN_COUNT && picFormPopupHashtagsVal.length <= HASHTAG_MAX_COUNT) {

      for (const el of picFormPopupHashtagsVal) {
        if (regex.test(el) === false) {
          return;
        }
      }

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
        onPicFormPopupClose();
        picFormPopupPreview.removeAttribute('class');
        onSuccessPopupOpen();
        onPicFormReset();
      })
      .catch(() => {
        onPicFormPopupClose();
        onErrorPopupOpen();
      });

  });

};
