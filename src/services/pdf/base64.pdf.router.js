const router = require("express").Router();

const { pdfToBase64 } = require("./base64.pdf.controller");

router.get("/base64-pdf/:fileName", pdfToBase64);

module.exports = router;
