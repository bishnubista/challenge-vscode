import React from "react";

import { getFileIcon } from "../helper";
import { Hover } from "./Hover";
import "./File.scss";

export const File = ({ name, id }) => {
  const FileIcon = getFileIcon(name);

  return (
    <li className="file-li">
      <Hover id={id}>
        {FileIcon && <FileIcon />}
        <span className="file-name">{name}</span>
      </Hover>
    </li>
  );
};
