import React, { useState, useEffect } from 'react';

import httpClient from "../lib/httpClient";

function _fetchData(searchQuery) {
  return (
    httpClient().get('/authors',{
      params: {
        maxRecords: 10,
        view: 'Grid view',
        filterByFormula: searchQuery && `SEARCH('${searchQuery}',LOWER({name}))`
      }
    })
      .then(result => result.data)
      .then(_mapFromAirtable)
  )
}

function _mapFromAirtable(data) {
  return data.records.map(
    record => ({
      id: record.id,
      name: record.fields.name,
      email: record.fields.email,
      avatar: record.fields.avatar,
      about: record.fields.about
    })
  )
}

const useAuthors = (searchQuery) => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setRecords(null);
    _fetchData(searchQuery).then(records => {
      setRecords(records);
    });
  }, [searchQuery]);

  return records;
};

export default useAuthors;
