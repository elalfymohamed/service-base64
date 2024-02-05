const express = require("express");
const cors = require("cors");

const base64_pdf = require("./services/pdf/base64.pdf.router");
const base64_image = require("./services/image/base64.image.router");

exports.endpoints = async (app) => {
  app.use(express.json());
  app.use(cors());

  app.use((req, res, next) => {
    const origin = req.headers.origin;

    res.set("Access-Control-Allow-Origin", origin);
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.set("Access-Control-Allow-Credentials", true);
    return next();
  });

  app.use(base64_pdf);
  app.use(base64_image);

  app.use('/test', (req, res) => {
      res.status(200).send('test');
  });

  app.use('/', (req, res) => {
  return res.status(200).send('ping !');
});

};


