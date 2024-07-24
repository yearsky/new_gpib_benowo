import React from "react";

const CustomDot = ({ index, activeSlide,oldSlide, onClick }) => {
  const isActive = index == 0;
console.log(isActive)
  return (
    <div
      onClick={onClick}
      className={`dot ${isActive ? "dot-active" : ""}`}
      style={{
        display: "inline-block",
        width: isActive ? "16px" : "30px",
        height: "5px",
        margin: "0 4px",
        backgroundColor: isActive ? "#666666" : "#cccccc",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default CustomDot;
