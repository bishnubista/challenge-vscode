import icons from "../assets/icons";

const getType = (fileType) =>
  typeof fileType === "string" ? fileType.split(".").pop() : "";

export const getFileIcon = (type) => {
  const fileType = getType(type);

  switch (fileType) {
    case "ico":
      return icons.JsFile;
    case "js":
      return icons.JsFile;
    case "json":
      return icons.JsonFile;
    case "git":
    case "gitignore":
      return icons.GitFile;
    case "css":
      return icons.CssFile;
    case "md":
      return icons.ReadmeFile;
    case "svg":
      return icons.ImageFile;
    case "lock":
      return icons.YarnFile;
    default:
      return icons.DefaultFile;
  }
};
