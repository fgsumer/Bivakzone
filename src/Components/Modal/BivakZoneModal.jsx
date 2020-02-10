import React, {Component} from 'react'
import '../../App.css'
import {Card, Row} from 'antd';
import BivakCarousel from './Carousal'
import Footer from './ModalFooter'
import './BivakZoneModal.css';
import {Link} from "react-router-dom";
import Filter from "./Filter";
import FavoriteButton from './FavoriteButton';
import FavoriteLists from './FavoriteLists';

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

        const {Meta} = Card;
        return (
            <>

                <article style={this.props.style} className={'bivak_modal'}>

                    {this.props.bivakzone &&
                    (
                        <>
                            <Row style={{height: "50%"}}>
                                <FavoriteButton bivakzone = {this.props.bivakzone}/>
                                <Card
                                    bivakzone={this.props.bivakzone}
                                    style={{width: "100%", height: "100%", border: "1xp soldi red", overflow: "hidden"}}
                                    cover={
                                        <BivakCarousel bivakzone={this.props.bivakzone}/>
                                    }
                                >
                                   <Link to={`/home/${this.props.bivakzone.id}`}><h1>{this.props.bivakzone.properties.name}</h1></Link>
                                </Card>
                            </Row>

                            <Row style={{height: "max-content", borderTop: "1px solid rgb(47, 155, 255)"}}>
                                <Footer properties={this.props.bivakzone.properties}></Footer>
                            </Row>
                            <Row>
                              <FavoriteLists />                                
                            </Row>
                        </>
                    )
                    }
                    {!this.props.bivakzone &&
                        (
                            <Filter callBack={this.props.onFilterChangeCallback} />
                        )
                    }
                </article>
            </>
        );
    }
}

export default BivakZoneModal;