import React, { Component, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Bivakzones from '../../bivakzones.json';
import Controllers from '../../controllers/controllers';

export default props => {
  const bivakzone = props.bivakzone;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (bivakzone) {
    const imgsURL = Controllers.imageExtractor(bivakzone);

    return (
      <Carousel
        style={{ width: '100%', height: '100%', border: '1px solid black', overflow: 'hidden', paddingLeft: '2px' }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {imgsURL.length === 0 ? (
          <Carousel.Item style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
            <img
              // style={{overflow:"hidden", backgroundSize: "cover", width:"100px", height:"100px"}}
              className="d-block w-100 h-100"
              src="images/n.png"
              alt=""
            />
          </Carousel.Item>
        ) : (
          imgsURL.map(url => (
            <Carousel.Item style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
              <img
                // style={{overflow:"hidden", backgroundSize: "cover", width:"100px", height:"100px"}}
                className="d-block w-100 h-100"
                src={url}
                alt={url.index + 1}
              />
            </Carousel.Item>
          ))
        )}
      </Carousel>
    );
  } else {
    return <h1>Nothingness</h1>;
  }
};
