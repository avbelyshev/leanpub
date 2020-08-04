import React from 'react';
import BookCard from "./Card";

class BooksList extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map(book => (
          <div key={book.id} style={styles.item}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    );
  }
}

export default BooksList;

const styles = {
  item: {
    marginBottom: '25px'
  }
}
