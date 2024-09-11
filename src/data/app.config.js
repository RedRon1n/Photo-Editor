import fs from "node:fs";
import path from "node:path";

function getFileTitle(htmlContent) {
  const regexResultTitle = htmlContent.match(
    /{% set title = ["']([^"]+)["'] %}/,
  );
  return regexResultTitle && regexResultTitle[1] ? regexResultTitle[1] : "";
}

const filesTwig = fs
  .readdirSync(path.join(process.cwd(), "src", "views"))
  .filter(
    (fileName) => fileName.includes(".twig") && !fileName.includes("ui.twig"),
  );

const listHtml = filesTwig
  .map((fileName) => {
    const filePath = path.join(process.cwd(), "src", "views", fileName);
    const htmlContent = fs.readFileSync(filePath, "utf8");
    const title = getFileTitle(htmlContent);
    const file = fileName.replace(".vituum.twig", "").replace(".twig", ".html");
    return { title, file };
  })
  .filter((item) => item.file.endsWith(".html"));

export { listHtml };
