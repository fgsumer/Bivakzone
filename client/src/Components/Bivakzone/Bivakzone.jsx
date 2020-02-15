import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Comment from './CommentForm';
import BivakDetails from './BivakDetails';
import bivakzones from '../../bivakzones.json';
import ImageComponent from './ImageComponent';


const Bivakzone = props => {
  const { id } = props;

  const bivak = bivakzones.features.find(bivakzone => bivakzone.id === id);

  return (
      <Row style={{ backgroundColor: '#EBEAEC', height: '100%' }}>
           <Col lg={4}>
             <ImageComponent  bivak={bivak}/>
            </Col>
          <Col lg={4} className="mt-5"><BivakDetails  bivak={bivak}/></Col>
          <Col lg={4} className="mt-3"><Comment id={id} bivak={bivak}/></Col>
      </Row>
  );
};

export default Bivakzone;
