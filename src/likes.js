import React, {Component} from 'react';

class Likes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Likes
      </button>

    );
  }
}

export default Likes;
