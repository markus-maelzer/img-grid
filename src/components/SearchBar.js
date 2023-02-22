import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchbar: '',
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchbar);
  }

  render() {
    const { searchbar } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input onChange={this.onInputChange} type="text" value={searchbar} name="searchbar" />
          </div>
        </form>
      </div>
    );
  }
}
