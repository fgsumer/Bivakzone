import React from 'react';
import {Carousel, Button, Container } from 'react-bootstrap';
import noImage from '../assets/images/n.png'

const ImageComponent=({data, setShowImage})=>{
    const handleClick =()=>{
        setShowImage(false)
        console.log('clicked')
      }

    const {image, image1, image2} = data.properties;
    const arryOfImages=[image, image1, image2].filter((img)=>img !== undefined);
    
    console.log(arryOfImages)

    if(arryOfImages.length === 0){
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={noImage}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                       <Button id="mapButton" className="btn-lg" onClick={handleClick}>
                           <i class="fas fa-globe-americas"></i>
                        </Button>
                    </Carousel.Caption>
                    </Carousel.Item>         
                </Carousel>
           </Container>
        )
    } else{
        return (
            <Container>
                
            <Carousel>
                {arryOfImages.map((image)=>(
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                            />
                        <Carousel.Caption>
                        <Button id="mapButton" className="btn-lg" onClick={handleClick}>
                           <i class="fas fa-globe-americas"></i>
                        </Button>
                        </Carousel.Caption>
                    </Carousel.Item>         
                ))}
            </Carousel>
            </Container>
        )

    }


};

export default ImageComponent;