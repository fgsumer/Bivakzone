import React from 'react';
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

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

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {/* {[["Dog {dog === 'yes' ? 'is allowed' : "isn't allowed"}", "<img style={dog === 'yes' ? availableStyle : unavailableStyle} src="/Icons/dog.png" />"], 'right', 'bottom', 'left'].map(placement => (
          <>
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary">Tooltip on {placement}</Button>
            </OverlayTrigger>{' '}
          </>
        ))} */}

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Dog {dog === 'yes' ? 'is allowed' : "isn't allowed"}</Tooltip>}
        >
          <img style={dog === 'yes' ? availableStyle : unavailableStyle} src="/Icons/dog.png" />
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip>{bicycle === 'yes' ? 'Accessible by ' : 'Not accessible by '}bicycle</Tooltip>
          }
        >
          <img
            style={bicycle === 'yes' ? availableStyle : unavailableStyle}
            src="/Icons/bicycle.png"
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip>Campfire is {openfire === 'yes' ? 'allowed!' : 'not allowed!'}</Tooltip>
          }
        >
          <img
            style={openfire === 'yes' ? availableStyle : unavailableStyle}
            src="/Icons/campfire.png"
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip>{fee === 'yes' ? 'Payment required!' : "You don't need to pay!"}</Tooltip>
          }
        >
          <img style={fee === 'yes' ? availableStyle : unavailableStyle} src="/Icons/fee.png" />
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
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip>
              Reservation is {reservation === 'yes' ? 'required!' : 'not necessary.'}
            </Tooltip>
          }
        >
          <img
            style={reservation === 'yes' ? availableStyle : unavailableStyle}
            src="/Icons/reservation.png"
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
            style={toilets === 'yes' ? availableStyle : unavailableStyle}
            src="/Icons/toilet.png"
          />
        </OverlayTrigger>
      </div>
    </>
  );
};
