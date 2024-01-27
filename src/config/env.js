require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  PATH_FILE_PDF: process.env.PATH_FILE_PDF,
  PATH_FILE_IMAGE: process.env.PATH_FILE_IMAGE,
};
