// Base64 is binary-to-text encoding.
// ASCII (American Standard Code for Information Interchange) is the most common character encoding format for text data

const {covertTobinary, covertToString} = require('../utils/buffer');

const encode = (req) => {

    const encodedData = {};
    for (const [key, value] of Object.entries(req)) {
        const data_key = covertTobinary(key);
        const data_value = covertTobinary(value);
        console.log(`${data_key}: ${data_value}`);
        encodedData[data_key] = data_value;
    }

    console.log(encodedData, 'encodedData');
    return encodedData;

}

const decode = (req) => {
    // const data = Buffer.from(req, 'base64').toString('ascii');
    // console.log('data', data);

    const decodedData = {};
    for (const [key, value] of Object.entries(req)) {
        const data_key = covertToString(key);
        const data_value = covertToString(value);
        console.log(`${data_key}: ${data_value}`);
        decodedData[data_key] = data_value;
    }

    console.log(decodedData, 'decodedData');
    return decodedData;
}

module.exports = {
    encode,
    decode
}