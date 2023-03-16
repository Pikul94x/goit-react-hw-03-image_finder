import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: null,
    foundImages: null,
    currentLargeImg: null,
  };

  setInitialParams = searchQuery => {
    if (searchQuery === '') {
      return alert(`Enter the search value!`);
    }
    if (searchQuery === this.state.searchQuery) {
      return;
    }

    this.setState({ images: [], searchQuery, page: 1 });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.setInitialParams} />
      </div>
    );
  }
}
