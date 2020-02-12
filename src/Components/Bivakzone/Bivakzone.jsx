import React from 'react';
import { Container } from 'react-bootstrap';
import Comment from './CommentForm';
import BivakDetails from './BivakDetails';
import { useParams } from 'react-router-dom';
import bivakzones from '../../bivakzones.json';
import BivakMap from './BivakMap';

const Bivakzone = props => {
  const { id } = props;

  const bivak = bivakzones.features.find(bivakzone => bivakzone.id === id);

  return (
    <div style={{ backgroundColor: '#EBEAEC', height: '100%' }}>
      <BivakDetails bivak={bivak} />
      <Comment id={id} bivak={bivak} />
    </div>
  );
};

export default Bivakzone;
