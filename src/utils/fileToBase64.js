/**
 * Converts a file to a base64 encoded string.
 *
 * @param {Object} file - the file to be converted
 * @return {string} the base64 encoded string
 */

exports.fileToBase64 = (file) => Buffer.from(file, "binary").toString("base64");
