import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component {
  state = {
    search: ''
  }

  onChangeMyInput = (event) => {
    this.setState({search: event.target.value})
    this.props.onSearch(event.target.value)
  }

  render () {
    return (
      <input type="text" onChange = {this.onChangeMyInput}
                className="form-control search-input"
                placeholder="type to search"
                value = {this.state.search}
      />
    );
  };
 }




export default SearchPanel;
