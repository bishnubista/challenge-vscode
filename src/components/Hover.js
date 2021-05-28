import React from "react";

import { ApiContext } from "../context";
import icons from "../assets/icons";
import "./Hover.scss";

export const Hover = ({ children, id }) => {
  const [, deleteById] = React.useContext(ApiContext);
  const [isHover, setIsHover] = React.useState(false);

  const { X: ClearIcon } = icons;

  const handleClear = () => deleteById(id);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="hover-div"
    >
      {children}
      {isHover && (
        <button
          onClick={handleClear}
          aria-label="clear icon"
          className="hover-btn-clear"
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
};
