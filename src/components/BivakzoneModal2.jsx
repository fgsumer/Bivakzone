import React, {Component} from 'react'
import '../App.css'
import { Card,Row } from 'antd';
import BivakCarousel from './Carousal'
import Footer from './ModalFooter'






export default class  extends Component {
   
  // state= {
  //   slide:false,
  //   arrowDirection: false
  // };
  // handleOnClick= ()=>{
  //   this.setState({
  //       slide: !this.state.slide,
  //       arrowDirection: !this.state.arrowDirection
  //   },()=>console.log(this.state.slide))
  // }
  render() {
    
    const { Meta } = Card;
    return (
<>
  
     <div style={this.props.style}>
      
      { this.props.bivakzone && 
         (
           <>
           {console.log(this.props.bivakzone.properties)}
        <Row tyle={{height:"50%"}}>
        <Card 
         bivakzone= {this.props.bivakzone}
          style={{ width:"100%", height:"100%", border:"1xp soldi red", overflow:"hidden" }}
          cover={
           <BivakCarousel  bivakzone={this.props.bivakzone}/>
          }
        >   
        </Card>
     </Row>
     <Row style={{height:"max-content"}}>
       <p style={{border:"1px solid black", height:"100px", backgroundColor:"red",padding:"2rem",  width:"100%", overflow:"hidden", height:"50%"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor corporis perferendis reiciendis porro provident excepturi ex velit, id quidem maxime praesentium exercitationem voluptates in cumque! Pariatur earum fuga nobis?</p>
     </Row>
      
      <Row  style={{height:"max-content"}}>
        <Footer properties={this.props.bivakzone.properties}></Footer>
      </Row>
       
     </>
      )  
      }
       {!this.props.bivakzone && (<h1>nothingness</h1>)}
     </div>
      </>
    );
  }
}

