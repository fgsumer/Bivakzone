import React from 'react';

export default ({ properties }) => {
  const { bicycle, openfire, fee, toilets, dog, drinking_water, reservation } = properties;
  const availableStyle = {
    width: '10%',
    border: '1px solid blue',
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
        <img style={dog === 'yes' ? availableStyle : unavailableStyle} src="/Icons/dog.png" />
        <img
          style={bicycle === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/bicycle.png"
        />
        <img
          style={openfire === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/campfire.png"
        />
        <img style={fee === 'yes' ? availableStyle : unavailableStyle} src="/Icons/fee.png" />
        <img
          style={drinking_water === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/drinking_water.png"
        />
        <img
          style={reservation === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/reservation.png"
        />
        <img
          style={toilets === 'yes' ? availableStyle : unavailableStyle}
          src="/Icons/toilet.png"
        />
      </div>
    </>
  );
};
