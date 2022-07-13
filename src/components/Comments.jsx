import React from 'react';
import Proptypes from 'prop-types';

class Comments extends React.Component {
  render() {
    const { evaluator, productId } = this.props;
    const comments = evaluator[productId];

    return (
      <div className="commentsContainer">
        { comments === undefined
          ? <div> </div>
          : comments.map((comment, index) => (
            <div className="commentElement" key={ index }>
              <p>{comment.email}</p>
              <p>{comment.rate}</p>
              <p>{comment.description}</p>
            </div>
          ))}
      </div>
    );
  }
}

Comments.propTypes = {
  evaluator: Proptypes.object,
  productId: Proptypes.string,
}.isRequired;

export default Comments;
