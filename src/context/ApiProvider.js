import React from "react";

import { ApiContext } from "./apiContext";
import { useFetchApi } from "../hooks/useFetchApi";

export const ApiProvider = ({ children }) => {
  const api = useFetchApi();

  const value = api;
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
