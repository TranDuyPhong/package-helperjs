const { HandlePrimtiveObject } = require('./common');

const ClonePrimitiveObject = function(object) {
    if (typeof object !== 'object') {
        throw new "Parameter 'object' is not a object";
    }
    return HandlePrimtiveObject(object);
};

module.exports = {
    ClonePrimitiveObject
};