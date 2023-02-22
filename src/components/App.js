import React, { Component } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = {
    images: [],
  }
  onSearchSubmit = async (term) => {
    try {
      const {data} = await unsplash.get('/search/photos', {
        params: { query: term },

      });
      console.log(this);
      this.setState({ images: data.results });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px',}}>
        <SearchBar onSubmit={this.onSearchSubmit} test="hi" />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
