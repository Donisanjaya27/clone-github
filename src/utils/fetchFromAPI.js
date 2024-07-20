import axios from 'axios';

//export const BASE_URL = 'https://www.googleapis.com';
export const BASE_URL = 'https://youtube-v3-lite.p.rapidapi.com';
const options = {
   params: {
  maxResults: 2500, 
  },
  headers: {
    'X-RapidAPI-Key': 'bf4ad55bb9mshf2105f1de4360a1p1d8d2ejsn7a558d91acac',
    'X-RapidAPI-Host': 'youtube-v3-lite.p.rapidapi.com',
  },

};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};


    

// const options = {
//   params: {
//     regionCode: 'ID',
//    maxResults: 2500,
//     key: 'AIzaSyBfr4i_TPRSadpPXYe4SHcW0Y5fUnyl7so',
//     type: 'any',
//   },
 
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
