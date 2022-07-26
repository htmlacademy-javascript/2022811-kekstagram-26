import { renderOutputPicThumb } from './output-pic-thumb.js';
import { renderOutputPicPopup } from './output-pic-popup.js';

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((data) => {
    renderOutputPicThumb(data);
    renderOutputPicPopup(data);
  })
