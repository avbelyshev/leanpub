import axios from 'axios';

const API_TOKEN = 'keyWwTdPXTu7EXYHb';

function httpClient(timeout = 2000) {
  return (
    axios.create({
      baseURL: "https://api.airtable.com/v0/appNxubRl4TyOblnn",
      timeout: timeout,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      }
    })
  );
}

export default httpClient;
