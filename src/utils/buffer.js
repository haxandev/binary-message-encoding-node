const covertTobinary = (key) => {
    return Buffer.from(key).toString('base64');
};

const covertToString = (key) => {
    return Buffer.from(key, 'base64').toString('ascii');
};


module.exports = {
    covertTobinary,
    covertToString
};