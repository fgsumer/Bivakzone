import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default ({ properties }) => {
  const { bicycle, openfire, fee, toilets, dog, drinking_water, reservation } = properties;
  const availableStyle = {
    width: '10%',
    // border: '1px solid blue',
    backgroundColor: 'rgb(47, 155, 255)',
  };
  const unavailableStyle = {
    width: '10%',
    opacity: '0.5',
    border: '1px solid rgb(47, 155, 255)',
  };
  const notKnownStyle = {
    width: '10%',
    opacity: '0.5',
    border: '1px solid blue',
    backgroundColor: 'gray',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            Dog{' '}
            {dog === 'yes'
              ? 'is allowed'
              : dog === 'no'
              ? "isn't allowed"
              : 'Info not available for dog'}
          </Tooltip>
        }
      >
        <img
          style={dog === 'yes' ? availableStyle : dog === 'no' ? unavailableStyle : notKnownStyle}
          src="/Icons/dog.png"
          alt="dog"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            {bicycle === 'yes'
              ? 'Accessible by bicycle'
              : bicycle === 'no'
              ? 'Not accessible by bicycle'
              : 'Info not available about bicycle'}
          </Tooltip>
        }
      >
        <img
          style={
            bicycle === 'yes' ? availableStyle : bicycle === 'no' ? unavailableStyle : notKnownStyle
          }
          src="/Icons/bicycle.png"
          alt="bicycle"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            Campfire is{' '}
            {openfire === 'yes'
              ? 'Campfire is allowed!'
              : openfire === 'no'
              ? 'Campfire is not allowed!'
              : 'Campfire info not available.'}
          </Tooltip>
        }
      >
        <img
          style={
            openfire === 'yes'
              ? availableStyle
              : openfire === 'no'
              ? unavailableStyle
              : notKnownStyle
          }
          src="/Icons/campfire.png"
          alt="open fire"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            {fee === 'yes'
              ? 'Payment required!'
              : fee === 'no'
              ? "You don't need to pay!"
              : 'Payment info is not available.'}
          </Tooltip>
        }
      >
        <img
          style={fee === 'yes' ? availableStyle : fee === 'no' ? unavailableStyle : notKnownStyle}
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
          style={drinking_water === 'yes' ? availableStyle : unavailableStyle}
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
          style={reservation === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/reservation.png"
          alt="reservation"
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip>
            Toilet{' '}
            {toilets === 'yes'
              ? 'is available!'
              : toilets === 'no'
              ? "isn't available!"
              : 'info not available.'}
          </Tooltip>
        }
      >
        <img
          style={
            toilets === 'yes' ? availableStyle : toilets === 'no' ? unavailableStyle : notKnownStyle
          }
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
    "<img style={dog === 'yes' ? availableStyle : unavailableStyle} src='/Icons/dog.png' />",
  ],
  [
    "{bicycle === 'yes' ? 'Accessible by ' : 'Not accessible by '}bicycle",
    "<img style={bicycle === 'yes' ? availableStyle : unavailableStyle} src='/Icons/bicycle.png'/>",
  ],
  [
    "Campfire is {openfire === 'yes' ? 'allowed!' : 'not allowed!'}",
    "<img style={openfire === 'yes' ? availableStyle : unavailableStyle} src='/Icons/campfire.png'/>",
  ],
  [
    "{fee === 'yes' ? 'Payment required!' : 'You don't need to pay!'}",
    "<img style={fee === 'yes' ? availableStyle : unavailableStyle} src='/Icons/fee.png' />",
  ],
  [
    "Drinking water {drinking_water === 'yes' ? 'is available!' : 'isn't available!'}",
    "<img style={drinking_water === 'yes' ? availableStyle : unavailableStyle} src='/Icons/drinking_water.png'/>",
  ],
  [
    "Reservation is {reservation === 'yes' ? 'required!' : 'not necessary.'}",
    "<img style={reservation === 'yes' ? availableStyle : unavailableStyle} src='/Icons/reservation.png'/>",
  ],
  [
    "Toilet {toilets === 'yes' ? 'is available!' : 'isn't available!'}",
    "<img style={toilets === 'yes' ? availableStyle : unavailableStyle} src='/Icons/toilet.png'/>",
  ],
]; 

amenities.map(amenity => (
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={amenity[0]}>
        {amenity[1]}
      </OverlayTrigger>
      )
      */
