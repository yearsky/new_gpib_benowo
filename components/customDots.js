import React, { act } from "react";

const CustomDot = ({ index, activeSlide,oldSlide, onClick }) => {
  const isActive = index == activeSlide;

  return (
    <div
      onClick={onClick}
      className={`dot ${isActive ? "dot-active" : ""}`}
      style={{
        display: "inline-block",
        width: isActive ? "16px": "30px",
        height: "5px",
        marginRight: isActive ? "10px" : "5px",
        marginLeft: isActive ? "10px" : "5px",
        backgroundColor: isActive ? "#666666" : "#cccccc",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default CustomDot;
