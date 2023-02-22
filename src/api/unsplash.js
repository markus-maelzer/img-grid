import axios from 'axios';
const unsplashKey = 'dbbc9a1fb96f7e575d7543be30add8ef1b0a9c1c87644f9bc6625ea19619c0b6';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${unsplashKey}`
  }
})
