/* eslint-disable no-console */
import React, {Component} from 'react';
import ResultList from './result_list';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = { term: '', results:[
      {
        id:1,
        name:'Sunil',
        comment:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      {
        id:2,
        name:'Kunal Mathur',
        comment:'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.'
      },
      {
        id:3,
        name:'Rakesh',
        comment:'The images or other media can be aligned top, middle, or bottom. The default is top aligned.'
      }
    ]};
  }

  onInputChange (event) {
    this.setState({term:event.target.value });
  }

  render() {
    return(
        <div className="form-group">
          <ResultList results= {this.state.results}/>
        </div>
    );
  }
}

export default SearchBar;
