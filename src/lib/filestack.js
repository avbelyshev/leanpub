import axios from 'axios';

const API_KEY = 'AisJ5MxtrRcG4ltL09Zngz';

const httpClient = axios.create({
  baseURL: "https://www.filestackapi.com/api",
  timeout: 10000
});

export const uploadFile = (file) => (
  httpClient.post('/store/S3', file, {
    params: {
      key: API_KEY
    }
  }).then(res => { return res.data; })
);
