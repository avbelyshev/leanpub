import React from 'react';
import AuthorCard from "./AuthorCard";

class BookCard extends React.Component {
  render() {
    const {
      book: { title, description, pages, language, progress, cover, author, minimum_price, suggested_price, collected_amount, expected_amount }
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={cover} alt={title} />
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{title}</div>
          <div>{description}</div>
          <div>Pages: {pages}</div>
          <div>Language: {language}</div>
          <div style={styles.price}>Minimum price: {minimum_price}</div>
          <div style={styles.price}>Suggested price: {suggested_price}</div>
          <div>Progress {progress}% ({collected_amount} of {expected_amount})</div>
          <AuthorCard author={author} />
        </div>
      </div>
    )
  }
}

export default BookCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold'
  }
}
