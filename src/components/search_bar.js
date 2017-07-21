//import React from 'react';
import React, { Component } from 'react';
 //const Component = React.Component; This means the same

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div>
        <input
          value = {this.state.term}
          onChange = { event => this.setState ({ term: event.target.value })}
        />
      </div>
      );
  }
}

export default SearchBar;



//Value of the input data entered: {this.state.term}
// return <input onChange = { this.onInputChange }/>;
// onInputChange(event){
//   console.log(event.target.value);
// }
// return <input onChange = {(event) => console.log(event.target.value) } />

//onChange = {(event) => this.setState({ term: event.target.value })}