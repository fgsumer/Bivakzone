import React from 'react';
import moment from 'moment';
import {Card } from 'react-bootstrap'
import './displaycomment.css';
import { Translate } from 'react-localize-redux';

const DisplayComment = ({ oldComments }) => {
  return (
    <Card>
      <Card.Header as="h3"><Translate id="comment.name"></Translate>Comments</Card.Header>
      <Card.Body>
        {oldComments.data.map(comment => {
          const d = moment(comment.date).format('MMM Do YY');
          return (
            <Card.Text>
              <span className="name pr-2">{comment.name}</span>{' '}
              <span className="message pr-2">{comment.message}</span>
              <span className="date">{d}</span>
            </Card.Text>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default DisplayComment;
