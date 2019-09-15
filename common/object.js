const PrimitiveValue = function(value) {
    let val = undefined;
    if (Array.isArray(value)) {
        val = HandlePrimitiveArray(value);
    } else {
        switch (typeof value) {
            case 'string':
                val = '';
                break;
            case 'boolean':
                val = false;
                break;
            case 'function':
                val = function () {};
                break;
            case 'number':
                val = 0;
                break;
            case 'object':
                val = HandlePrimtiveObject(value);
                break;
        }
    }
    return val;
}

const HandlePrimitiveArray = function(array) {
    let arr = [];
    if (array.length <= 0) {
        return arr;
    }
    for (let item in array) {
        arr[item] = PrimitiveValue(array[item])
    }
    return arr;
}

const HandlePrimtiveObject = function(object) {
    let obj = {};
    for (let item in object) {
        obj[item] = PrimitiveValue(object[item]);
    }
    return obj;
}

const ClonePrimitiveObject = function(object) {
    if (typeof object !== 'object') {
        throw new "Parameter 'object' is not a object";
    }
    const obj = HandlePrimtiveObject(object);
    return obj;
};

module.exports = {
    ClonePrimitiveObject,
};