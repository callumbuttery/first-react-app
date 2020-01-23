import React from "react";
import img1 from "./img1.jpg";

function MainContent() {
  return (
    <div>
      <p>This is my main content</p>
      <img
        src={img1}
        style={{ height: "200px" }}
        style={{ width: "200px" }}
      ></img>
    </div>
  );
}

export default MainContent;
