function getImagesMarkup(images) {
  return images.hits
    .map(
      element =>
        `<li class="gallery-item">
	<a class="gallery-link" href="${element.largeImageURL}">
		<img
			class="gallery-image"
			src="${element.webformatURL}"
			alt="${element.tags}"
			/>
	</a>
  <ul class="image-info">
   <li class="image-item-info">
        <span class="text-accent">Likes</span>
        <span class="text-comment">${element.likes}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Views</span>
      <span class="text-comment">${element.views}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Comments</span>
      <span class="text-comment">${element.comments}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Downloads</span>
      <span class="text-comment">${element.downloads}</span>
    </li>
  </ul>
 
</li>`
    )
    .join('');
}

function toggleLoadMoreButton(show, moreBtn, dataSearch = '') {
  if (!show) {
    moreBtn.classList.add('hide');
    return;
  }
  moreBtn.classList.remove('hide');
  moreBtn.dataset.search = dataSearch;
}

function toggleSearchEndText(show, textEl) {
  if (!show) {
    textEl.classList.add('hide');
    return;
  }
  textEl.classList.remove('hide');
}

export { getImagesMarkup, toggleLoadMoreButton, toggleSearchEndText };
