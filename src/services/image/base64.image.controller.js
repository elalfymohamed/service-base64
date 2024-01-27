const { readFileAndConvert } = require("../../utils/readFileAndConvert.js");
const { extensionSearchImage } = require("../../utils/extensionSearchImage.js");

const { PATH_FILE_IMAGE } = require("../../config/env.js");
const { ErrorFileName, ErrorFile } = require("../../config/messageError.js");

exports.imageToBase64 = async (res, req) => {
  try {
    const fileName = req.req.params.fileName;

    if (!fileName) {
      return res.res.status(404).json({
        status: 404,
        message: ErrorFileName,
      });
    }

    const filePath = `${PATH_FILE_IMAGE}/${fileName}`;

    const foundFilePath = extensionSearchImage(filePath);

    if (!foundFilePath) {
      return res.status(404).json({
        status: 404,
        message: ErrorFile,
      });
    }
    const _fileName = `${fileName}.${foundFilePath.extension}`;
    const base64Data = await readFileAndConvert(foundFilePath.filePath);

    const extensionMap = {
      svg: "svg+xml",
    };

    const data = `data:image/${
      extensionMap[foundFilePath.extension] || foundFilePath.extension
    };base64,${base64Data}`;

    return res.res.status(200).json({
      data,
      fileName: _fileName,
    });
  } catch (error) {
    return res.res.status(500).json({ error: error.message });
  }
};
