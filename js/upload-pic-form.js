export const showUploadPicForm = () => {

  const picForm = document.getElementById('upload-select-image');
  const picFormUploadFile = document.getElementById('upload-file');
  const picFormPopup = document.querySelector('#upload-select-image .img-upload__overlay');
  const picFormPopupCloseBtn = document.getElementById('upload-cancel');
  const picFormPopupPreview = document.querySelector('#upload-select-image .img-upload__overlay img');
  const picFormPopupHashtags = document.querySelector('#upload-select-image .text__hashtags');
  const picFormPopupDesc = document.querySelector('#upload-select-image .text__description');

  function openPicFormPopup() {
    picFormPopup.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keyup', onPicFormPopupEscapeKeydown);
  }

  function closePicFormPopup() {
    picFormPopup.classList.add('hidden');
    document.body.classList.remove('modal-open');
    resetPicForm();
    document.removeEventListener('keyup', onPicFormPopupEscapeKeydown);
  }

  picFormUploadFile.addEventListener('change', (e) => {
    openPicFormPopup();
    picFormPopupPreview.setAttribute('src', URL.createObjectURL(e.target.files[0]));
  });

  picFormPopupCloseBtn.addEventListener('click', closePicFormPopup);

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

  function openSuccessPopup() {
    successPopup.classList.remove('hidden');
    document.addEventListener('keyup', onSuccessPopupEscapeKeydown);
  }

  function closeSuccessPopup() {
    successPopup.classList.add('hidden');
    document.removeEventListener('keyup', onSuccessPopupEscapeKeydown);
  }

  function onSuccessPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      closeSuccessPopup();
    }
  }

  const errorPopup = document.querySelector('.error');

  function openErrorPopup() {
    errorPopup.classList.remove('hidden');
    document.addEventListener('keyup', onErrorPopupEscapeKeydown);
  }

  function closeErrorPopup() {
    errorPopup.classList.add('hidden');
    document.removeEventListener('keyup', onErrorPopupEscapeKeydown);
  }

  function onErrorPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      closeErrorPopup();
    }
  }

  function resetPicForm() {
    picForm.reset();
    removeAttrClassPicFormPopup();
  }

  function onPicFormPopupEscapeKeydown(e) {
    if (e.key === 'Escape') {
      closePicFormPopup();
    }
  }

  document.addEventListener('click', (e) => {
    if (successPopup.contains(e.target)) {
      closeSuccessPopup();
    } else if (errorPopup.contains(e.target)) {
      closeErrorPopup();
      openPicFormPopup();
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
        closePicFormPopup();
        picFormPopupPreview.removeAttribute('class');
        openSuccessPopup();
        resetPicForm();
      })
      .catch(() => {
        closePicFormPopup();
        openErrorPopup();
      });

  });

};
