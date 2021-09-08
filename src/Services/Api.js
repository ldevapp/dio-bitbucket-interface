import axios from "axios";

const origin = window.location.origin;

const Api = axios.create({
  baseURL: `https://api.bitbucket.org/`,
  headers: {
      'origin': origin
    }
});

export default Api;