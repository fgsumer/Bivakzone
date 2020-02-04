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
  
     <div  style={this.props.style}>
      
      { this.props.bivakzone && 
         (
           <>
           {console.log(this.props.bivakzone.properties)}
        <Row  style={{height:"50%"}}>
        <Card 
         bivakzone= {this.props.bivakzone}
          style={{ width:"100%", height:"100%", border:"1xp soldi red", overflow:"hidden" }}
          cover={
           <BivakCarousel  bivakzone={this.props.bivakzone}/>
          }
        >   
        </Card>
     </Row>
     <Row style={{height:"40%"}}>
       <p style={{marginTop:"2rem" ,marginLeft:".5rem",marginRight:".5rem", textAlign:"center", height:"100px",  width:"100%", height:"50%", borderRight:"1px solid blue"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor corporis perferendis reiciendis porro provident excepturi ex velit, id quidem maxime praesentium exercitationem voluptates in cumque! Pariatur earum fuga nobis?</p>
     </Row>
      
      <Row  style={{height:"max-content",borderTop:"1px solid rgb(47, 155, 255)"}}>
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

