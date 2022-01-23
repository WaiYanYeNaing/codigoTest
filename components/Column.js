import React from "react";

export const Column = (props) => {
  return (
    <div style={{ ...props.style, ...{ gridColumn: `span ${props.span}` } }}>
      {props.children}
    </div>
  );
};
