const convertAsciiToString = (str) => {
    let result = '';
    str.split(",").map((char) => {
        result += String.fromCharCode(char);
    });
    return result;
}

const convertStringToAscii = ([...str]) => {
    const array = str.map((char) => {
        return char.charCodeAt(0);
    });
    return array;
}

const asciiHeadersToString = (headers) => {
    const decodedHeaders = {};
    for (const [key, value] of Object.entries(headers)) {
        const data_value = convertAsciiToString(value);
        decodedHeaders[key] = data_value;
    }
    return decodedHeaders;
}

module.exports = {
    convertAsciiToString,
    convertStringToAscii,
    asciiHeadersToString
}