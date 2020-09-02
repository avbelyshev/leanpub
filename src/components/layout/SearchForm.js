import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.searchInputRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.handleSearch(this.searchInputRef.current.value);
  }

  render() {
    return (
      <div style={styles.form}>
        <input ref={this.searchInputRef} type='text' name='search' placeholder='Search...' />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}

export default SearchForm;

const styles = {
  form: {
    padding: '15px 10px'
  }
}
