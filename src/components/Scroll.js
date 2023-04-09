import React from "react";

export const Scroll = props => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "4px solid #026b76",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};
