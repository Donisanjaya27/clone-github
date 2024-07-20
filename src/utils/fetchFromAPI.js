import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3;
//export const BASE_URL = 'https://youtube-v3-lite.p.rapidapi.com';

const options = {
  params: {
    regionCode: 'ID',
   maxResults: 2500,
    key: 'AIzaSyBfr4i_TPRSadpPXYe4SHcW0Y5fUnyl7so',
    type: 'any',
    part:'snippet'
  },
 
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
