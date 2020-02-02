import React from 'react';
import { Map as LeafletMap,GeoJSON, TileLayer, Marker, Popup} from 'react-leaflet';
import bivakzones from './bivakzones.json';
import PopupCard from './PopupCard';
import Filter from './filter';
import { Handler } from 'leaflet';
import {Modal} from 'react-bootstrap';
import BivakzoneModal from './components/BivakzoneModal2';
import './App.css';
import {ShowModalContext} from './utils/Context'
import {Icon} from 'antd'




class Map extends React.Component {
  
  static contextType= ShowModalContext;
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state= {
      showModal:false,
      arrowDirection: false,
      bivakzones:{}
    }
    this.child = React.createRef();
  }
  
 
 showModalFunc=(modalState)=>{
   this.setState(
     {
     
     showModal: modalState
     }
   )
 }
 componentDidMount(){
   console.log(this.state)
   
   
   console.log(this.context)
 }
 handleOnClick= (e)=>{
   this.setState(
     {
     showModal: !this.state.showModal,
     bivakzone: e.sourceTarget.feature
     }
   )
  //  this.context= false;
   console.log(e.sourceTarget)
   console.log(this.state.showModal)
  //  this.child.showModal()
  }
  handlArrowClick=()=>{
    this.setState({
      showModal: !this.state.showModal,
      arrowDirection: !this.state.arrowDirection
    },()=>{console.log(this.state.arrowDirection)})
  }

 handleOnClose= ()=>{
  this.setState({
    ...this.state,
    showModal: !this.state.showModal
  })
 
}
refresh= ()=> {
  console.log('refreshed')
  this.setState({
    ...this.state,
      bivakzones: function(){
        return bivakzones.features
      }
  })
  
}



    render() {
     const showStyle={
        width:"25vw",
        height:"60vw",
        background:"white",
        transition:"width 1s ease-in-out",
        overflow:"hidden",
        float:"left",
        zIndex:"1",
        border:"1 solid black",
        boxShadow:"2px 2px  rgba(0,0,0,0.5)",
        display:"block"
      }
      const hideStyle={
        width:"0px",
        height:"200px",
        backGround:"blue",
        transition:"width 1s ease-in-out",
        overflow:"hidden",
        float:"left",
        zIndex:"1"
      }
        let modal;
        const rightArrow = <Icon  type="right" />;
     const leftArrow =<Icon  type="left" />
    // if (this.state.showModal){
    //     return  
    //     }
        modal= 
       
        <BivakzoneModal  
        style={this.state.showModal ? hideStyle:showStyle}
        // className={this.state.showModal ? "modal_on_click":"modal"}
        modalState={this.showModalFunc}
        handleOpen={this.handleOnClick} 
        onRef={ref => (this.child = ref)}  
        handleClose={this.handleOnClose} 
        bivakzone={this.state.bivakzone}
        showModal={this.state.showModal}
        >

        </BivakzoneModal>
            return (
            <>
            <div>
              
              {modal}

              <button style={{float:"left", zIndex:"1", height:"3rem", color:"blue"}} onClick={this.handlArrowClick} className="exp_btn" >
              {this.state.arrowDirection ? leftArrow:rightArrow}
              </button>
              <LeafletMap
              className="leaflet-container"
              center={[51, 5]}
              zoom={9}
              maxZoom={19}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
              >
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
            
                {   bivakzones.features.map((bivakzone)=>
                   <GeoJSON
                    data={bivakzone}
                    style={() => ({
                      color: '#4a83ec',
                      weight: 0.5,
                      fillColor: "#1a1d62",
                      fillOpacity: 1,
                      }
                      )
                    }
                    onMouseOver={e => {
                      e.target.openPopup();
                    }}
                    onMouseOut={e => {
                      setTimeout(() => {
                        e.target.closePopup();
                      }, 5000);
                    }
                    }
                    onClick ={e => {
                      this.handleOnClick(e)
                    }} 
                  >
                    <Popup>
                      <PopupCard bivakzone={bivakzone} />
                        <a href={`/home/${bivakzone.id}`}>{bivakzone.properties.name}</a> 
                    </Popup>
                  </GeoJSON>
                )
            }
       
              </LeafletMap>
            
              </div>
            
                  
                   
        </>
      );
          }
    }
  

export default Map;

