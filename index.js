const express = require("express");

const app = express();

const { endpoints } = require("./src/index.router");
//Config
const { PORT, NODE_ENV } = require("./src/config/env.js");

endpoints(app);

const port = PORT || 8080;

if (NODE_ENV == "dev") {
  app.listen(process.argv[2], () => {
    console.log(
      `Development connected successfully ON PORT-${process.argv[2]}`
    );
  });
} else {
  app.listen(port, () => {
    console.log(`Production connected successfully ON port-${port}`);
  });
}
