import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '46452979-80039da2fd5690445e01cff1c',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

async function searchImages(q, page = 1) {
  const photos = await api.get('', { params: { q, page } });
  console.log('axios', photos);
  console.log('total', photos.data.total);
  return photos.data;
}

export { searchImages };
