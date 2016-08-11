import React, {Component} from 'react';

class AddComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well well-sm col-md-6">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Comment</label>
            <div className="col-sm-10">
              <textarea className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
