const API_KEY = '46452979-80039da2fd5690445e01cff1c';
const BASE_URL = 'https://pixabay.com/api/';

function searchImages(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { searchImages };
