import React, {Component} from 'react';
import ResultItem from './result_item';
import AddComment from './add_comment';

class ResultList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const results = this.props.results.map((result) => {
        return (
          <ResultItem name={result.name}
            comment={result.comment}
            key={result.id} />
        );
      });

      return (
        <div>
          <ul className="media-list">
            {results}
          </ul>
          <br/>
          <AddComment/>
        </div>
      );
  }
}

export default ResultList;
