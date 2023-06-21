import React from "react";

const AddOutline = ({ color, style }) => {
  return (
    <div
      className="add-outline"
      style={{
        backgroundColor: color,
        ...style,
      }}
    >
    </div>
  );
};

export default AddOutline;
