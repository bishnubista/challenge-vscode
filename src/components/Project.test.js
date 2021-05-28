import { act, render } from "@testing-library/react";
import { Project } from "./Project";
import { ApiProvider } from "../context/ApiProvider";

const data = {
  id: "0eab8660-3735-4cde-af38-3724536fb409",
  type: "project",
  name: "my project",
  children: [
    {
      id: "19515e30-5f39-4a59-bd22-7497ae8b2de9",
      type: "folder",
      name: "config.js",
      children: [
        {
          id: "37bab640-1139-40a5-8ec3-28465310e868",
          type: "file",
          name: "webpack.config.js",
        },
      ],
    },
    {
      id: "78676c77-0298-4ab2-a2c7-aa62d189071a",
      type: "file",
      name: "yarn.lock",
    },
  ],
};

jest.mock("../hooks/useFetchApi", () => {
  return {
    useFetchApi: () => [
      { directoryTree: { ...data }, isLoading: false },
      jest.fn(),
    ],
  };
});

const renderWithProvider = (component) =>
  render(<ApiProvider>{component}</ApiProvider>);

test("Project is rendered with project name, folder name and file name", () => {
  act(() => {
    const { getByText } = renderWithProvider(<Project />);
    expect(getByText("MY PROJECT")).toBeTruthy();
    expect(getByText("config.js")).toBeTruthy();
    expect(getByText("yarn.lock")).toBeTruthy();
  });
});
