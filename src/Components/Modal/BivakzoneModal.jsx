import React,{Component} from 'react'
 import { Drawer, Button } from 'antd'
 class BivakzoneModal extends Component {
   constructor(props){
    super(props)
     this.state= {
   show: this.props.showModal
   }

 }
  componentDidMount(){
 
  }
 handleOnShow=()=>{
   this.setState({
     show: !this.state.show
   }, ()=>console.log("state: " + this.state.show ,"props :" + this.props.showModal))
   this.props.modalState(this.state.show)
  
 }
 
render(){
  
  return(
      <div>
    <button onClick={this.handleOnShow}>X</button>
    
    <div  style={this.state.show ? {position:"fixed", zIndex:"1", width:"30%", height:"90%"}:{display:"none"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nam, natus ea iure nihil debitis corrupti impedit nobis soluta obcaecati, fugit vel ex nemo deserunt porro? Fuga voluptates excepturi laboriosam!</div>
    </div>

   
      )
  }
  
}
  


export default BivakzoneModal;