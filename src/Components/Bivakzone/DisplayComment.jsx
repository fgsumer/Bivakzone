import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import { Avatar } from 'antd';
import './displaycomment.css';

const DisplayComment = ({ oldComments }) => {
  console.log(oldComments);

  return (
    //   <Card>
    //       <Card.Header as="h3">Comments</Card.Header>
    //       <Card.Body>
    //       {oldComments.data.map((comment)=>{
    //       const d= moment(comment.date).format('MMM Do YY')
    //       return (
    //          <Card.Text>
    //           <span className="name pr-2">{comment.name}</span> <span className="message pr-2">{comment.message}</span><span className="date">{d}</span>
    //          </Card.Text>
    //          )
    //       })}
    //   </Card.Body>
    // </Card>
    <div className="division">
      <h4>Comments</h4>

      {oldComments.data.map(comment => {
        const d = moment(comment.date).format('MMM Do YY');
        return (
          <>
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

// const styles = {
//   p: {
//     position: 'relative',
//     background: '#00aabb',
//     borderRadius: '0.4em',
//     ':after': {
//       content: '',
//       position: 'absolute',
//       left: '0',
//       top: '50%',
//       width: '0',
//       height: '0',
//       border: '20px solid transparent',
//       borderRightColor: '#00aabb',
//       borderLeft: '0',
//       borderTop: '0',
//       marginTop: '-10px',
//       marginLeft: '-20px',
//     },
//   },
// };
