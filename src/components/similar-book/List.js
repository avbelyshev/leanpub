import React from 'react';
import SimilarBookCard from "./Card";

class SimilarBooksList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { books: this.props.books };
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(id) {
    this.setState({ books: this.state.books.filter(book => id !== book.id) });
  }

  render() {
    return (
      <div>
        <div>Similar books:</div>
        {this.state.books.slice(0, 3).map(book => (
          <div key={book.id} style={styles.item}>
            <SimilarBookCard book={book} deleteBook={this.deleteBook} />
          </div>
        ))}
      </div>
    );
  }
}

export default SimilarBooksList;

const styles = {
  item: {
    marginBottom: '25px'
  }
}
