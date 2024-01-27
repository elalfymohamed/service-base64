const router = require("express").Router();

const { imageToBase64 } = require("./base64.image.controller");

router.get("/base64-image/:fileName", imageToBase64);

module.exports = router;
