import httpClient from "./httpClient";

export function createBook(fields) {
  return (
    httpClient(10000).post('/Books', {
      records: [
        {
          fields
        }
      ]
    })
      .then(result => result.data)
  );
}
