import React from "react";

import { File } from "./File";
import { Folder } from "./Folder";
import { ApiContext } from "../context";

export const Project = () => {
  const [{ directoryTree, isLoading }] = React.useContext(ApiContext);

  const renderFiles = (data) => {
    return (
      Array.isArray(data) &&
      data.map((item) => {
        return item.type === "file" ? (
          <File key={item.id} id={item.id} name={item.name} />
        ) : (
          <Folder
            key={item.id}
            id={item.id}
            name={item.name}
            data={item.children}
            renderFiles={renderFiles}
          />
        );
      })
    );
  };

  const { name, children } = directoryTree || {};

  return isLoading ? (
    "Loading..."
  ) : (
    <div>
      {name && name.toUpperCase()}
      {children && renderFiles(children)}
    </div>
  );
};
