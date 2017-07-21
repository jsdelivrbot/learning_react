//We're going to create a new component. This component shoud produce some HTML
//Take this component's generated HTML and put it in on the page (in the DOM)
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAoO4nAEHnYwDCB3ojzTF0aHpMb_pvmnW4';

YTSearch({key: API_KEY, term: 'hey! say! jump'}, function(data){
  console.log(data);
});


// type of component:
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));