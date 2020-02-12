import React from 'react';
import moment from 'moment';

import './displaycomment.css';

const DisplayComment = ({ oldComments }) => {
  return (
   
    <div className="division">
      {oldComments.data.map(comment => {
        const d = moment(comment.date).format('MMM Do YY');
        return (
          <>
            <h4>Comments</h4>
            <p className="speech">
              <span>"{comment.message}"</span>
              <br />
              <p className="commentedBy">
                {comment.name}, <span className="commentDate">{d}</span>
              </p>
            </p>
            {/* <Avatar size="large" icon="user" /> */}
          </>
        );
      })}
    </div>
  );
};

export default DisplayComment;
