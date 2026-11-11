
import React, { useState } from 'react';

const Selection = (props) => {

  const [style, setStyle] = useState({ background: "" });

  const updateSelectionStyle = (newStyle) => {
    setStyle({ ...newStyle });
  };

  const handleClick = () => {
    props.applyColor(updateSelectionStyle);
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