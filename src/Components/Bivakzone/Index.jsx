import React,{Component} from 'react'
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



 class Single extends Component{

   id =  this.props.location.pathname.split("/").slice(2).slice(-5).join("/");

    render () {
    
         return (

    <> 
        <Col lg={6} ><BivakMap id={this.id} /></Col>
        <Col lg={6} ><Bivakzone id={this.id} /></Col>
    </>
    )}
} 

export default Single 