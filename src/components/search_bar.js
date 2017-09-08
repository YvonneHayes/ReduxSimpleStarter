import React, {Component} from 'react';


class SearchBar extends Component {
  render() {
    return <input onChange = {event => console.log('You typed something')} />;
  }
}

export default SearchBar;
