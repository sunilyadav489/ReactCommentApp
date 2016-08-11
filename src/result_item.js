import React, {Component} from 'react';
import Likes from './likes';
const path = require('./images/download.svg');

class ResultItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnail thumbnail-post">
         <div className="caption">
            <div className="media">
               <div className="media-left">
                  <a href="#" className="image-post">
                    <img src={path} alt="50x50"/>
                  </a>
               </div>
               <div className="media-body">
                  <a className="media-heading title-post" href="#">{this.props.name}</a>
                  <h5 className="time-post">3 minutes ago</h5>
               </div>
            </div>
            <p>{this.props.comment}</p>
         </div>
         <div className="links-post">
            <span className="glyphicon glyphicon-thumbs-up link-post"/>&nbsp;
            <a href="#" className="link-post" role="button">Like</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="fa fa-comment link-post"/>
            <a href="#" className="link-post" role="button">Comment</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="fa fa-reply link-post"/>
            <a href="#" className="link-post" role="button">Share</a>
         </div>
      </div>
    );
  }
}

export default ResultItem;
