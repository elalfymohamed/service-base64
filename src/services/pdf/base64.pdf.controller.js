const { readFileAndConvert } = require("../../utils/readFileAndConvert");

const { PATH_FILE_PDF } = require("../../config/env");
const { ErrorFileName, ErrorFile } = require("../../config/messageError.js");

exports.pdfToBase64 = async (res, req) => {
  try {
    const fileName = req.req.params.fileName;

    if (!fileName) {
      return res.res.status(404).json({
        status: 404,
        message: ErrorFileName,
      });
    }
    const _fileName = `${fileName}.pdf`;
    const filePath = `${PATH_FILE_PDF}/${_fileName}`;

    const base64Data = await readFileAndConvert(filePath);

    if (!base64Data) {
      return res.res.status(404).json({
        status: 404,
        message: ErrorFile,
      });
    }

    return res.res.status(200).json({
      data: `data:application/pdf;base64,${base64Data}`,
      fileName: _fileName,
    });
  } catch (error) {
    return res.res.status(500).json({ error: error.message });
  }
};
