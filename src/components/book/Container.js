import React, { useState } from 'react';
import SearchForm from "../layout/SearchForm";
import BooksList from "../book/List";
import useBooks from "../../hooks/useBooks";

const BookContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const books = useBooks(searchQuery);

  return (
    <>
      <SearchForm handleSearch={searchQuery => setSearchQuery(searchQuery)} />
      <BooksList isLoading={!books} books={books} />
    </>
  )
}

export default BookContainer;
