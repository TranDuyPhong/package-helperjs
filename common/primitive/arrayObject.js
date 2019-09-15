const { HandlePrimitiveArray } = require('./common');

const ClonePrimitiveArrayObject = function(array) {
    if (!Array.isArray(array)) {
        throw new "Parameter 'array' is not a array";
    }
    return HandlePrimitiveArray(array);
};

module.exports = {
    ClonePrimitiveArrayObject
};