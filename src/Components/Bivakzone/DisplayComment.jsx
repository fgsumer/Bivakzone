import React from 'react';
import moment from 'moment';

import './displaycomment.css';

const DisplayComment = ({ oldComments }) => {
  return (
    // <Card>
    //   <Card.Header as="h3">Comments</Card.Header>
    //   <Card.Body>
    //     {oldComments.data.map(comment => {
    //       const d = moment(comment.date).format('MMM Do YY');
    //       return (
    //         <Card.Text>
    //           <span className="name pr-2">{comment.name}</span>{' '}
    //           <span className="message pr-2">{comment.message}</span>
    //           <span className="date">{d}</span>
    //         </Card.Text>
    //       );
    //     })}
    //   </Card.Body>
    // </Card>
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
