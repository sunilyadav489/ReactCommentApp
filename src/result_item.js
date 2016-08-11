import React, {Component} from 'react';
import Likes from './likes';

class ResultItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="media col-md-6 clearfix">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://www.casansaar.com/photo/blank.gif" width="64" alt="Image"/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.name}</h4>
          {this.props.comment}<br/>
          <Likes/>
        </div>
      </li>
    );
  }
}

export default ResultItem;
