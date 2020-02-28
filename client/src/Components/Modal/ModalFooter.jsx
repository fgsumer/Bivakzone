import React from 'react';
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';
import './BivakZoneModal.css'

export default ({ properties }) => {
  const { bicycle, openfire, fee, toilets, dog, drinking_water, reservation } = properties;
  // const "availableStyle" = {
  //   width: '10%',
  //   border: '1px solid black',
  //   borderRadius: '50px',
  //   backgroundColor: 'rgb(47, 155, 255)',
  //   marginRight:'5%',
  // };
  // const un"availableStyle" = {
  //   width: '10%',
  //   marginRight:'5%',
  //   border: '1px solid black',
  //   borderRadius: '50px',
  // }

  return (
    <div style={{ width:'100%',display: 'flex', flexDirection: 'row', justifyContent: 'space-around', overflowX:"auto", alignItems:"center" }}>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>Dog {dog === 'yes' ? 'is allowed' : "isn't allowed"}</Tooltip>}
      >
        <img 
          className={dog === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/dog.png"
          alt="dog"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>{bicycle === 'yes' ? 'Accessible by ' : 'Not accessible by '}bicycle</Tooltip>
        }
      >
        <img 
          className={bicycle === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/bicycle.png"
          alt="bicycle"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>Campfire is {openfire === 'yes' ? 'allowed!' : 'not allowed!'}</Tooltip>}
      >
        <img className={openfire === 'yes' ? "icon":null}
          className={openfire === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/campfire.png"
          alt="open fire"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>{fee === 'yes' ? 'Payment required!' : "You don't need to pay!"}</Tooltip>
        }
      >
        <img 
          className={fee === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/fee.png"
          alt="fee"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            Drinking water {drinking_water === 'yes' ? 'is available!' : "isn't available!"}
          </Tooltip>
        }
      >
        <img 
          className={drinking_water === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/drinking_water.png"
          alt="drink water"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>Reservation is {reservation === 'yes' ? 'required!' : 'not necessary.'}</Tooltip>
        }
      >
        <img 
          className={reservation === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/reservation.png"
          alt="reservation"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>Toilet {toilets === 'yes' ? 'is available!' : "isn't available!"}</Tooltip>
        }
      >
        <img
          className={toilets === 'yes' ? "availableStyle" : "unavailableStyle"}
          src="/Icons/toilet.png"
          alt="toilet"
        />
      </OverlayTrigger>
    </div>
  );
};

/* const amenities = [
  [
    "Dog {dog === 'yes' ? 'is allowed' : 'isn't allowed'}",
    "<img style={dog === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/dog.png' />",
  ],
  [
    "{bicycle === 'yes' ? 'Accessible by ' : 'Not accessible by '}bicycle",
    "<img style={bicycle === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/bicycle.png'/>",
  ],
  [
    "Campfire is {openfire === 'yes' ? 'allowed!' : 'not allowed!'}",
    "<img style={openfire === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/campfire.png'/>",
  ],
  [
    "{fee === 'yes' ? 'Payment required!' : 'You don't need to pay!'}",
    "<img style={fee === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/fee.png' />",
  ],
  [
    "Drinking water {drinking_water === 'yes' ? 'is available!' : 'isn't available!'}",
    "<img style={drinking_water === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/drinking_water.png'/>",
  ],
  [
    "Reservation is {reservation === 'yes' ? 'required!' : 'not necessary.'}",
    "<img style={reservation === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/reservation.png'/>",
  ],
  [
    "Toilet {toilets === 'yes' ? 'is available!' : 'isn't available!'}",
    "<img style={toilets === 'yes' ? "availableStyle" : un"availableStyle"} src='/Icons/toilet.png'/>",
  ],
]; 

amenities.map(amenity => (
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={amenity[0]}>
        {amenity[1]}
      </OverlayTrigger>
      )
      */
