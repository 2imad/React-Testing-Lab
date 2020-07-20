import React from "react";
import Rainbow from "./HOC/withBackground";
const Header = (props) => {
  return (
    <header>
      <p> Header Text</p>
    </header>
  );
};
export default Rainbow(Header);
