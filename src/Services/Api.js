import axios from "axios";

const origin = 'http://localhost:3000/';

const Api = axios.create({
  baseURL: `https://api.bitbucket.org/`,
  headers: {
      'origin': origin
    }
});

export default Api;