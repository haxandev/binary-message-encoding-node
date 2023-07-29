const fs = require('fs');
const uuid = require('uuid');
const fileType = require('file-type');
const path = require('path');


const fileUpload =  async (buffer) => {
    const file = await fileType.fromBuffer(buffer);
    const fileName = uuid.v4() + '.' + file.ext;
    const filePath = path.join(__dirname, '../../uploads', fileName);
    fs.writeFileSync(filePath, buffer);
}

module.exports = {
    fileUpload
}