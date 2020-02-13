import React, { Component } from 'react';
import '../../App.css';
import { Card,Row, Col } from 'antd';
import BivakCarousel from './Carousal';
import Footer from './ModalFooter';
import './BivakZoneModal.css';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import CommentForm from '../Bivakzone/CommentForm'
import Card1 from 'react-bootstrap/Card'
class BivakZoneModal extends Component {
  state = {
    slide: false,
    arrowDirection: false,
  };
  handleOnClick = () => {
    this.setState(
      {
        slide: !this.state.slide,
        arrowDirection: !this.state.arrowDirection,
      },
      () => console.log(this.state.slide),
    );
  };
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
                    border: '1xp soldi red',
                    overflow: 'hidden',
                  }}
                  cover={<BivakCarousel bivakzone={this.props.bivakzone} />}
                ></Card>
              </Row>
              <Row className="bivak_btn">
                <Col span={12}>
                  <Link to={`/home/${this.props.bivakzone.id}`}>
                    <h4 style={{textAlign:'center'}}>{this.props.bivakzone.properties.name}</h4>
                  </Link>
                </Col>
                <Col span={12}>
                  <FavoriteButton refresh={this.refreshSate} bivakzone={this.props.bivakzone} />
                </Col>
              </Row>
              
              <Row style={{ height: 'max-content', borderTop: '1px solid rgb(47, 155, 255)' }}>
                <Footer properties={this.props.bivakzone.properties}></Footer>
              </Row>
              <Card1>
                <Card1.Body>
                    <Card1.Text><h6 className="fas fa-user-tie mr-2">{this.props.bivakzone.properties.operator}</h6></Card1.Text>
                    <Card1.Text><h6 className="fas fa-mobile-alt mr-2">{this.props.bivakzone.properties.phone}</h6></Card1.Text>
                </Card1.Body>
            </Card1>
            </>
          )}
        </article>
      </>
    );
  }
}
export default BivakZoneModal;
