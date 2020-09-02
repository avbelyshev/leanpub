import React from 'react';
import BookCard from "./Card";
import withLoader from "../HOC/withLoader";

const BooksList = (props) => {
  return (
    <div>
      {props.books.map(book => (
        <div key={book.id} style={styles.item}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default withLoader(BooksList);

const styles = {
  item: {
    marginBottom: '25px'
  }
}
