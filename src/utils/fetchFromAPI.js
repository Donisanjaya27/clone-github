import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    regionCode: 'ID',
   
  },
  headers: {
    'X-RapidAPI-Key': 'bf4ad55bb9mshf2105f1de4360a1p1d8d2ejsn7a558d91acac',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
