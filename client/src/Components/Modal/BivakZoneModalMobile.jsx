import React, { Component } from "react";
import "../../App.css";
import { Card, Row } from "antd";
import BivakCarousel from "./Carousal";
import Footer from "./ModalFooter";
import "./BivakZoneModal.css";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton"

class BivakZoneModal extends Component {
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
    return (
      <>
        <article className={ "bivak_modal_mobile"+" "+ this.props.className}>
          {this.props.bivakzone && (
            <>
              <div className= "carousel">
                <BivakCarousel bivakzone={this.props.bivakzone} />
              </div>
 
              <div className="title">
                <Link to={`/home/${this.props.bivakzone.id}`}>
                  <h6>{this.props.bivakzone.properties.name}</h6>
                </Link>
                <FavoriteButton className='favourite_btn'
                    refresh={this.refreshSate}
                    bivakzone={this.props.bivakzone}
                  />
              </div>

              <div className="footer">
                <Footer properties={this.props.bivakzone.properties}></Footer>
              </div>
            </>
          )}
        </article>
      </>
    );
  }
}

export default BivakZoneModal;
