const { fileUpload } = require('../functions/upload');
const { encode, decode } = require('../functions/binary');
const { asciiHeadersToString } = require('../functions/ascii');


/**
 * Validate
 * @public
 */

const validate = (req) => {
  if (!req.body.name || !req.body.email) {
    throw new Error('Error');
  }
};

/**
 * Convert to Binary
 * @public
 */

 exports.encode = async (req, res, next) => {
  try {
    asciiHeadersToString(req.headers); // Decoded ASCII-encoded headers
    const data = encode(req.body);
    res.json({
      "data":data, 
      "message": "Data encoded sucessfully."
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Convert to String
 * @public
 */

 exports.decode = async (req, res, next) => {
  try {
    asciiHeadersToString(req.headers); // Decoded ASCII-encoded headers
    const data = decode(req.body);
    res.json({
      "data":data, 
      "message": "Data deccoded sucessfully."
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Store Buffer Image
 * @public
 */

exports.storeImage = async (req, res, next) => {
  try {
    await fileUpload(req.body);
    res.json({
      "success": "created"
    });
  } catch (error) {
    next(error);
  }
};



