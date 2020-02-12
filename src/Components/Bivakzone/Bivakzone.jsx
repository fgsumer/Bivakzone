import React from 'react';
import Comment from './CommentForm';
import BivakDetails from './BivakDetails';
import bivakzones from '../../bivakzones.json';

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
