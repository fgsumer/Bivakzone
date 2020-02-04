import React,{Component} from 'react'
import BivakMap from './BivakMap';
import Bivakzone from './Bivakzone';
import { Container, Row, Col } from 'react-bootstrap';



export default class extends Component{

    render () {
         return (

    <> 
        <Col lg={6} ><BivakMap /></Col>
        <Col lg={6} ><Bivakzone  /></Col>
    </>
    )}
} 