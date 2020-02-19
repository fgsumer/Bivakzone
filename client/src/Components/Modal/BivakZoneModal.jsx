import React, { Component } from "react";
import "../../App.css";
import { Card, Row, Col } from "antd";
import BivakCarousel from "./Carousal";
import Footer from "./ModalFooter";
import "./BivakZoneModal.css";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";


class BivakZoneModal extends Component {
  state = {
    slide: false,
    arrowDirection: false
  };
  handleOnClick = () => {
    this.setState(
      {
        slide: !this.state.slide,
        arrowDirection: !this.state.arrowDirection
      },
      () => console.log(this.state.slide)
    );
  };
  render() {
    const { Meta } = Card;
    return (
      <>
        <article style={this.props.style} className={"bivak_modal"}>
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
