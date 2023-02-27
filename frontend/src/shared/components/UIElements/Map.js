import React from "react";

import "./Map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      Here should be google map but it requires to add a credit card to use this
      particullar API so I decided to skip that part.
    </div>
  );
};

export default Map;
