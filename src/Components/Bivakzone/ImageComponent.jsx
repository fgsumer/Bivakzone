import React from 'react';
import {Carousel, Button, Container, Card } from 'react-bootstrap';
import FavoriteButton from '../Modal/FavoriteButton';
import controllers from '../../controllers/controllers';
import {Link} from 'react-router-dom'
import { Translate } from 'react-localize-redux';


const ImageComponent=({bivak})=>{
    const arryOfImages = controllers.imageExtractor(bivak);
    
    if (bivak.geometry.type === 'Polygon') {
        const firstCoordinate = bivak.geometry.coordinates[0].map(a => a[0]);
        const x = firstCoordinate.reduce((c, d) => c + d, 0) / firstCoordinate.length;
  
        const secondCoordinate = bivak.geometry.coordinates[0].map(a => a[1]);
        const y = secondCoordinate.reduce((c, d) => c + d, 0) / secondCoordinate.length;
        
        bivak.geometry.type = 'Point';
        bivak.geometry.coordinates = [x, y];
      }

      const {name, operator, phone, url } =  bivak.properties

    if(arryOfImages.length === 0){
        return (
            <Container>
                <FavoriteButton bivakzone={bivak} />
                <Link to='/' ><Button className="far fa-arrow-alt-circle-left ml-5"><Translate id="comment.back">Back</Translate></Button></Link>   
                <Carousel>
                    <Carousel.Item style={{width: "100%", height: "300px", overflow: "hidden"}}>
                        <img
                        className="d-block w-100 h-100"
                        src="/images/n.png"
                        alt="First slide"
                        />
                    </Carousel.Item>         
                </Carousel>
                <Card>
                    <Card.Body>
                        <Card.Text><h5>{name}</h5></Card.Text>
                        <Card.Text><h6 className="fas fa-user-tie">{operator}</h6></Card.Text>
                        <Card.Text><h6 class="fas fa-mobile-alt">{phone}</h6></Card.Text>
                        <Card.Text><p className="fas fa-map-marker-alt mr-2">:{bivak.geometry.coordinates[0]},{bivak.geometry.coordinates[1]}</p></Card.Text> 
                        <Card.Link href={`${url}`}>Read More</Card.Link>
                    </Card.Body>
                </Card>
           </Container>
        )
    } else{
        return (
            <Container>
                <FavoriteButton bivakzone={bivak} />
                <Link to='/' ><Button className="far fa-arrow-alt-circle-left ml-5"><Translate id="comment.back">Back</Translate></Button></Link>
            <Carousel>
                {arryOfImages.map((image)=>(
                    <Carousel.Item style={{width: "100%", height: "300px", overflow: "hidden"}}>
                        <img
                            className="d-block w-100 h-100"
                            src={image}
                            alt="First slide"
                            />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card>
                <Card.Body>
                    <Card.Text><h5>{name}</h5></Card.Text>
                    <Card.Text><h6 className="fas fa-user-tie">{operator}</h6></Card.Text>
                    <Card.Text><h6 class="fas fa-mobile-alt">{phone}</h6></Card.Text>
                    <Card.Text><p className="fas fa-map-marker-alt mr-2">:{bivak.geometry.coordinates[0]},{bivak.geometry.coordinates[1]}</p></Card.Text> 
                    <Card.Link href={`${url}`}>Read More</Card.Link>
                </Card.Body>
            </Card>
            </Container>
        )

    }

};

export default ImageComponent;
