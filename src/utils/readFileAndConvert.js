const fs = require("fs");
const path = require("path");

const { fileToBase64 } = require("./fileToBase64");

/**
 * Reads the content of a file, converts it to base64, and returns the result.
 *
 * @param {string} fileName - the name of the file to be read and converted
 * @return {string} the base64 representation of the file content
 */
exports.readFileAndConvert = async (fileName) => {
  try {
    if (fs.statSync(fileName)?.isFile()) {
      const filePath = path.resolve(fileName);
      const fileContent = fs.readFileSync(filePath, "binary");
      const base64String = fileToBase64(fileContent);

      return base64String;
    }
  } catch (error) {
    return null;
  }
};
