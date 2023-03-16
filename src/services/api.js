import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  try {
    const params = new URLSearchParams({
      key: '28287622-9fc0cf20b0788b19abfc6bde1',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    });

    const response = await axios.get(`?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
