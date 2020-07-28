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
    let { authors } = this.props;
    const authorsCount = authors.length;

    if (!fullList) {
      authors = authors.slice(0, 3);
    }

    return (
      <div>
        {authors.map(author => (
          <div key={author.id} style={styles.item}>
            <AuthorCard author={author}/>
          </div>
        ))}
        {((authorsCount > 3) && (!fullList)) &&
          <button onClick={() => this.toggleList()}>Show all authors ({authorsCount})</button>
          || fullList &&
          <button onClick={() => this.toggleList()}>Hide authors</button>
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
