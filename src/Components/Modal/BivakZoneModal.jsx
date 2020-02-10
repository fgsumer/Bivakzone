import React, { Component } from 'react';
import '../../App.css';
import { Card, Row } from 'antd';
import BivakCarousel from './Carousal';
import Footer from './ModalFooter';
import './BivakZoneModal.css';
import { Link } from 'react-router-dom';
import Filter from './Filter';

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
    const { Meta } = Card;
    return (
      <>
        <article style={this.props.style} className={'bivak_modal'}>
          {this.props.bivakzone && (
            <>
              <Row style={{ height: '50%' }}>
                <Card
                  bivakzone={this.props.bivakzone}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '1xp solid red',
                    overflow: 'hidden',
                  }}
                  cover={<BivakCarousel bivakzone={this.props.bivakzone} />}
                ></Card>
              </Row>

              <Row>
                <Link to={`/home/${this.props.bivakzone.id}`}>
                  <h1>{this.props.bivakzone.properties.name}</h1>
                </Link>
              </Row>

              <Row style={{ height: 'max-content', borderTop: '1px solid rgb(47, 155, 255)' }}>
                <Footer properties={this.props.bivakzone.properties}></Footer>
              </Row>
            </>
          )}
          {!this.props.bivakzone && <Filter callBack={this.props.onFilterChangeCallback} />}
        </article>
      </>
    );
  }
}

export default BivakZoneModal;
