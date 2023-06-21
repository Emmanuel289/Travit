import PropTypes from "prop-types";
import React from "react";

export const CheckboxFalse = ({ color = "black", style }) => {
  return (
    <svg
      className="checkbox-false"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.75 3H5.25C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3Z"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

CheckboxFalse.propTypes = {
  color: PropTypes.string,
};
