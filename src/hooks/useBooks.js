import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { zip, zipObject } from "lodash";

const API_TOKEN = 'keyWwTdPXTu7EXYHb';

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/appNxubRl4TyOblnn",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  }
});

function _fetchData(searchQuery) {
  return (
    httpClient.get('/books',{
      params: {
        maxRecords: 4,
        view: 'Grid view',
        filterByFormula: searchQuery && `SEARCH('${searchQuery}',LOWER({title}))`
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
      title: record.fields.title,
      description: record.fields.description,
      pages: record.fields.pages,
      language: record.fields.language,
      progress: record.fields.progress,
      cover: record.fields.cover,
      authors: _mapAuthorsFromRecord(record),
      minimum_price: record.fields.minimum_price,
      suggested_price: record.fields.suggested_price,
      collected_amount: record.fields.collected_amount,
      expected_amount: record.fields.expected_amount,
      subscribers: record.fields.subscribers
    })
  )
}

function _mapAuthorsFromRecord(record) {
  let authorsList = [];
  const authors = record.fields.authors;
  const names = record.fields['name (from authors)'];
  const emails = record.fields['email (from authors)'];
  const avatars = record.fields['avatar (from authors)'];
  const abouts = record.fields['about (from authors)'];

  if (!authors.length) {
    return authorsList;
  }

  for (let i = 0; i < authors.length; i++) {
    authorsList = zip(
      authors, names, emails, avatars, abouts
    ).map(record => zipObject(
      ['id', 'name', 'email', 'avatar', 'about'],
      record
    ))
  }
  return authorsList;
}

const useBooks = (searchQuery) => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setRecords(null);
    _fetchData(searchQuery).then(records => {
      setRecords(records);
    });
  }, [searchQuery]);

  return records;
};

export default useBooks;
