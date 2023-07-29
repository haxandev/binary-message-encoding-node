const { fileUpload } = require('../functions/upload');
const { encode, decode } = require('../functions/binary');


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
 * Store Buffer File
 * @public
 */

exports.storeFile = async (req, res, next) => {
  try {
    await fileUpload(req.body);
    res.json({
      "success": "created"
    });
  } catch (error) {
    next(error);
  }
};



