import React from 'react';
import { Container } from 'react-bootstrap';
import Comment from './Comment';
import BivakDetails from './BivakDetails';
import { useParams } from 'react-router-dom';
import bivakzones from '../bivakzones.json';

const Bivakzone = () => {
  const { id } = useParams();
  const bivakzone = bivakzones.features.filter(
    bivakzone => bivakzone.id === `node/${id}` || bivakzone.id === `way/${id}`,
  );

  const bivak = bivakzone[0];

  return (
    <div className="bivakzone">
      <Container>
        <BivakDetails bivak={bivak} />
        <Comment bivak={bivak} />
      </Container>
    </div>
  );
};

export default Bivakzone;
