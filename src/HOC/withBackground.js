import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["green", "yellow", "red", "orangered"];
  const usedColor = colors[Math.floor(Math.random() * 4)];

  return (props) => {
    console.log(props);
    return (
      <div style={{ color: usedColor, padding: props.padding }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
