import React from "react";

import Api from "../api";

export const useFetchApi = () => {
  const [directoryTree, setDirectoryTree] = React.useState({});

  const [isLoading, setIsLoading] = React.useState(false);

  const deleteById = async (id) => {
    try {
      const newDirectory = await Api.deleteById(id);
      setDirectoryTree(newDirectory);
    } catch (error) {
      console.error("Oops we could not delete", error);
    }
  };

  React.useEffect(() => {
    let isMounting = true;
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const directory = await Api.getDirectoryTree();
        setDirectoryTree(directory);
      } catch (error) {
        console.error("Oops something went wrong", error); // we can add logger implementation
      } finally {
        setIsLoading(false);
      }
    };
    if (isMounting) {
      fetchApi();
    }
    return () => (isMounting = false); // to prevent mutating state on unmount of component
  }, []);

  return [{ directoryTree, isLoading }, deleteById];
};
