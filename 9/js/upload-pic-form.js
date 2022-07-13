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

  picFormPopupUploadBtn.addEventListener('click', (e) => {
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    if (re.test(picFormPopupHashtags.value) === false) {
      e.preventDefault();
    }
    if (picFormPopupDesc < 2 && picFormPopupDesc > 140) {
      e.preventDefault();
    }
  });

};

showUploadPicForm();
