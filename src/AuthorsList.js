import React from 'react';
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { fullList: false };
  }

  toggleList() {
    this.setState({ fullList: !this.state.fullList });
  }

  render() {
    const { fullList } = this.state;
    const { authors } = this.props;
    const authorsCount = authors.length;
    const authorsFiltered = fullList ? authors : authors.slice(0, 3);

    return (
      <div>
        {authorsFiltered.map(author => (
          <div key={author.id} style={styles.item}>
            <AuthorCard author={author}/>
          </div>
        ))}
        {(authorsCount > 3) &&
          <button onClick={() => this.toggleList()}>
            {fullList ? 'Hide authors' : `Show all authors (${authorsCount})`}
          </button>
        }
      </div>
    );
  }
}

export default AuthorsList;

const styles = {
  item: {
    marginBottom: '5px'
  }
}
