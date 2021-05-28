import React from "react";

import icons from "../assets/icons";
import "./Folder.scss";

import { Hover } from "./Hover";

export const Folder = ({ data, renderFiles, id, name }) => {
  const { ArrowDown, ArrowRight } = icons;

  const [toggleId, setToggleId] = React.useState("");

  const handleToggle = () => setToggleId((state) => (!!state ? "" : id));

  return (
    <ul className="folder-ul">
      <Hover id={id}>
        <span onClick={handleToggle}>
          {!!toggleId ? <ArrowDown /> : <ArrowRight />}
        </span>
        {name}
      </Hover>

      {toggleId === id && renderFiles(data)}
    </ul>
  );
};
