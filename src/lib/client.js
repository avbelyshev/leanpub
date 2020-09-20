import axios from 'axios';

const API_TOKEN = 'keyWwTdPXTu7EXYHb';

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/appNxubRl4TyOblnn",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  }
});

export function createBook(fields) {
  return (
    httpClient.post('/Books', {
      records: [
        {
          fields
        }
      ]
    })
      .then(result => result.data)
  );
}
