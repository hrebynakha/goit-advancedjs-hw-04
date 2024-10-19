function isObjectsExists(total, page = 1, pp = 15) {
  const calc = total - page * pp;
  return calc > 1 ? true : false;
}

function scrollScreen() {
  const el = document.querySelector('.gallery');
  const current = el.getBoundingClientRect();
  setTimeout(() => {
    window.scrollBy({
      top: current.height * 2,
      behavior: 'smooth',
    });
  }, 500);
}

export { isObjectsExists, scrollScreen };
