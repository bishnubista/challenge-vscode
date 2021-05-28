import React from "react";
import { Project } from "./components";
import { ApiProvider } from "./context";

export default function App() {
  return (
    <ApiProvider>
      <Project />
    </ApiProvider>
  );
}
