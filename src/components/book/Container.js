import React from 'react';
import axios from 'axios';
import BooksList from "../book/List";

const API_TOKEN = 'keyWwTdPXTu7EXYHb';

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/appNxubRl4TyOblnn",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  }
});

class BookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: null
    }

    this._mapFromAirtable = this._mapFromAirtable.bind(this);
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { records } = this.state;

    return (
      records ?
        <BooksList books={records} />
        : <div>Loading...</div>
    )
  }

  _fetchData() {
    httpClient.get('/books',{
      maxRecords: 4,
      view: 'Grid view'
    })
      .then(result => result.data)
      .then(this._mapFromAirtable)
      .then(records => {
        this.setState({
          records
        })
      });
  }

  _mapFromAirtable(data) {
    return data.records.map(
      record => ({
        id: record.id,
        title: record.fields.title,
        description: record.fields.description,
        pages: record.fields.pages,
        language: record.fields.language,
        progress: record.fields.progress,
        cover: record.fields.cover,
        authors: this._mapAuthorsFromRecord(record),
        minimum_price: record.fields.minimum_price,
        suggested_price: record.fields.suggested_price,
        collected_amount: record.fields.collected_amount,
        expected_amount: record.fields.expected_amount,
        subscribers: record.fields.subscribers
      })
    )
  }

  _mapAuthorsFromRecord(record) {
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
      authorsList[i] = {
        id: authors[i],
        name: names[i],
        email: emails[i],
        avatar: avatars[i],
        about: abouts[i]
      }
    }
    return authorsList;
  }
}

export default BookContainer;
