import PropTypes from "prop-types";
import React from "react";
import AddOutline from "./addoutline";
import "./button-style.css"

export const Button = ({ text = "Button", state, changeIcon, size, type, style, frameStyle, buttonStyle }) => {
  return (
    <div className={`button ${type} ${changeIcon} ${state} ${size}`} style={style}>
      <div className="frame" style={frameStyle}>
        {changeIcon === "none" && (
          <div className="div" style={buttonStyle}>
            {["large", "small"].includes(size) && <>{text}</>}

            {size === "medium" && <>Button</>}
          </div>
        )}

        {["icon-only", "left"].includes(changeIcon) && (
          <AddOutline
            color={
              state === "disable"
                ? "#8F8C91"
                : type === "ghost" && state === "hover"
                ? "#9BE0C8"
                : type === "ghost" && state === "pressed"
                ? "#82CBB2"
                : "#112211"
            }
            style={
              state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only"
                ? {
                    height: "24px",
                    marginLeft: "-4.00px",
                    marginRight: "-4.00px",
                    minWidth: "24px",
                    position: "relative",
                  }
                : state === "default" && type === "outlined" && size === "large" && changeIcon === "icon-only"
                ? {
                    height: "20px",
                    marginLeft: "-2.00px",
                    marginRight: "-2.00px",
                    minWidth: "20px",
                    position: "relative",
                  }
                : {
                    height: "16px",
                    minWidth: "16px",
                    position: "relative",
                  }
            }
          />
        )}

        {["left", "right"].includes(changeIcon) && (
          <div className="div-2">
            {["large", "small"].includes(size) && <>{text}</>}

            {size === "medium" && <>Button</>}
          </div>
        )}

        {changeIcon === "right" && (
          <AddOutline
            color={
              state === "disable"
                ? "#8F8C91"
                : type === "ghost" && state === "hover"
                ? "#9BE0C8"
                : type === "ghost" && state === "pressed"
                ? "#82CBB2"
                : "#112211"
            }
            style={{
              height: "16px",
              minWidth: "16px",
              position: "relative",
            }}
          />
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["default", "pressed", "focus", "disable", "hover"]),
  changeIcon: PropTypes.oneOf(["icon-only", "none", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["outlined", "filled", "ghost"]),
};
