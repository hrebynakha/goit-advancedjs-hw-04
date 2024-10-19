import { initLightbox } from './js/lightbox';
import {
  getImagesMarkup,
  toggleSearchEndText,
  toggleLoadMoreButton,
} from './js/render-functions';
import { searchImages } from './js/pixabay-api';
import { displayCriticalError, displayError } from './js/toast';
import { isObjectsExists, scrollScreen } from './js/helpers';
import { refs } from './js/refs';
let page = 1;

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMore.addEventListener('click', handleLoadMoreClick);

const lightbox = initLightbox();

async function handleSearchFormSubmit(e) {
  e.preventDefault();
  page = 1;
  const form = e.currentTarget;
  const q = form.elements.q.value.trim();
  toggleLoadMoreButton(false, refs.loadMore);
  toggleSearchEndText(false, refs.searchEndText);
  refs.loader.classList.remove('loader-off');
  try {
    const images = await searchImages(q);
    refs.gallery.innerHTML = '';
    if (images.totalHits === 0) {
      displayError();
      refs.loader.classList.add('loader-off');
      return;
    }

    const imagesMarkup = getImagesMarkup(images);
    refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);
    lightbox.refresh();
    if (isObjectsExists(images.totalHits)) {
      toggleLoadMoreButton(true, refs.loadMore, q);
    }
    refs.loader.classList.add('loader-off');
  } catch (error) {
    console.error(e);
    displayCriticalError();
  } finally {
    form.reset();
  }
}

async function handleLoadMoreClick(e) {
  page += 1;
  const q = e.currentTarget.dataset.search;
  refs.loader.classList.remove('loader-off');
  toggleLoadMoreButton(false, refs.loadMore);

  try {
    const images = await searchImages(q, page);
    const imagesMarkup = getImagesMarkup(images);
    refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);
    lightbox.refresh();
    if (isObjectsExists(images.totalHits, page)) {
      toggleLoadMoreButton(true, refs.loadMore, q);
    } else {
      toggleSearchEndText(true, refs.searchEndText);
    }
    scrollScreen();
    refs.loader.classList.add('loader-off');
  } catch {
    console.error(e);
    displayCriticalError();
  }
}
