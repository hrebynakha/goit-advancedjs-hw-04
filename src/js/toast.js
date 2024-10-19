import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function displayError() {
  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
  });
}

function displayCriticalError() {
  iziToast.error({
    message: `Sorry, but something going wrong...!`,
    position: 'topRight',
  });
}

export { displayError, displayCriticalError };
