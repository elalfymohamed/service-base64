const fs = require("fs");
/**
 * Search for an image file with the given name and return its extension and file path if found.
 *
 * @param {string} fileName - The name of the image file to search for.
 * @return  { { extension: string, filePath: string } | null } An object containing the extension and file path if found, or null if not found.
 */
exports.extensionSearchImage = (fileName) => {
  const extensions = ["jpg", "jpeg", "png", "svg", "gif"];

  for (let i = 0; i < extensions.length; i++) {
    const extension = extensions[i];
    const filePath = `${fileName}.${extension}`;
    if (fs.existsSync(filePath)) {
      return { extension, filePath };
    }
  }
  return null;
};
