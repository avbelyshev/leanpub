import React from 'react';
import AuthorsList from "../author/List";
import SubscriptionTerms from "./SubscriptionTerms";

class BookCard extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Empty book</div>;
    }

    const {
      book: { title, description, pages, language, progress, cover, authors, minimum_price, suggested_price, collected_amount, expected_amount, subscribers }
    } = this.props;

    return (
      <>
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
            {(subscribers >= 100)
              ? <div style={styles.popular}>Subscribers: {subscribers}</div>
              : <div>Subscribers: {subscribers}</div>
            }
            <SubscriptionTerms />
          </div>
        </div>
        <AuthorsList authors={authors} />
      </>
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
    maxWidth: '200px',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.05rem',
    letterSpacing: '.05rem'
  },
  popular: {
    color: 'red',
    fontWeight: 'bold',
  }
}
