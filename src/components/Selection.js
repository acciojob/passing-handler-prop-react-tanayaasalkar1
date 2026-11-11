
import React, { useState } from 'react';

const Selection = (props) => {

  const [style, setStyle] = useState({ background: "" });

  const handleClick = () => {
    props.applyColor(setStyle);
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={handleClick}
    >
    </div>
  );
};

export default Selection;
