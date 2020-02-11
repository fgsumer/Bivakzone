import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Comment from './CommentForm';
import BivakDetails from './BivakDetails';
import { useParams } from 'react-router-dom';
import bivakzones from '../../bivakzones.json'
import BivakMap from "./BivakMap";
import FavoriteLists from '../Modal/FavoriteLists';

const Bivakzone=(props)=>{
    const {id}  = props;
  
    const bivak = bivakzones.features.find((bivakzone)=> bivakzone.id === id);

    return (
      <Container>
        <Row >
          <Col lg={4} className="mt-4"><BivakDetails  bivak={bivak}/></Col>
          <Col lg={4} className="mt-4"><Comment id={id} bivak={bivak}/></Col>
          <Col lg={4} className="mt-4"><FavoriteLists /></Col>
        </Row>      
      </Container>
    )
};

export default Bivakzone;
