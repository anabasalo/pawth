import React from 'react';

const Tile = ({ index, bear, onClick }) => {
  return (
    <div className={`tile ${bear ? 'bear' : ''}`} onClick={() => onClick(index)}>
      {bear && <div className="bear-icon" />}
    </div>
  );
};

export default Tile;