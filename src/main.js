import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesMarkup } from './js/render-functions';
import { searchImages } from './js/pixabay-api';
import { displayError } from './js/toast';

const refs = {
  gallery: document.querySelector('.gallery'),
  searchForm: document.getElementById('searchPhotoForm'),
  loader: document.querySelector('.loader'),
};

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const q = form.elements.q.value.trim();
  refs.loader.classList.remove('loader-off');
  searchImages(q)
    .then(images => {
      refs.gallery.innerHTML = '';
      if (images.total === 0) {
        displayError();
        refs.loader.classList.add('loader-off');
        return;
      }
      const imagesMarkup = getImagesMarkup(images);

      refs.gallery.insertAdjacentHTML('beforeend', imagesMarkup);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
      refs.loader.classList.add('loader-off');
    })
    .catch(e => {
      console.error(e);
      displayError();
    })
    .finally(() => form.reset());
}
