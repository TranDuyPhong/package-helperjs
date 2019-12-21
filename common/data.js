const GetCachingData = function(key, callBack) {
    const dataString = localStorage.getItem(key);
    let val = {
        data: null,
        dataString: null
    }
    if (dataString) {
        val[data] = JSON.parse(dataString);
        val[dataString] = dataString;
    }
    if (typeof callBack !== undefined && typeof callBack !== 'undefined' && typeof callBack !== null && !isNaN(callBack) && typeof callBack === 'function') {
        callBack(val);
    }
    return val;
};

const SetCachingData = function(key, data, callBack = null) {
    const dataString = JSON.stringify(data);
    const val = {
        data,
        dataString
    };
    localStorage.setItem(key, dataString);
    if (typeof callBack !== undefined && typeof callBack !== 'undefined' && typeof callBack !== null && !isNaN(callBack) && typeof callBack === 'function') {
        callBack(val);
    }
    return val;
};

const MapFormToModelData = (form) => {
    let modelData = {};
    if (form === undefined || form === null || typeof form === 'undefined') {
        throw new 'Form invalid';
    } else {
        for (let i = 0; i < form.length; i++) {
            const field = form[i];
            if (field) {
				if (field.name) {
					switch (field.type) {
						case 'radio':
							if (field.checked === true) {
								modelData[field.name] = field.value;
							}
							break;
						case 'checkbox':
							modelData[field.name] = field.checked;
							break;
						default:
						    modelData[field.name] = field.value;
							break;
					}
                }
            }
        }
    }
    return modelData;
};

const MapFormToModelDataWithFile = (form) => {
    let modelData = {};
    if (form === undefined || form === null || typeof form === 'undefined') {
        throw new 'Form invalid';
    } else {
        for (let i = 0; i < form.length; i++) {
            const field = form[i];
            if (field) {
				if (field.name) {
                    switch (field.type) {
                        case 'file':
                            if (field.files) {
                                modelData[field.name] = field.files[0];
                            } else {
                                modelData[field.name] = null;
                            }
                            break;
						case 'radio':
							if (field.checked === true) {
								modelData[field.name] = field.value;
							}
							break;
						case 'checkbox':
							modelData[field.name] = field.checked;
							break;
						default:
						    modelData[field.name] = field.value;
							break;
                    }
                }
            }
        }
    }
    return modelData;
};

const MapFormToModelDataOnlyFile = (form) => {
    let modelData = {};
    if (form === undefined || form === null || typeof form === 'undefined') {
        throw new 'Form invalid';
    } else {
        for (let i = 0; i < form.length; i++) {
            const field = form[i];
            if (field) {
				if (field.name) {
                    switch (field.type) {
                        case 'file':
                            if (field.files) {
                                modelData[field.name] = field.files[0];
                            } else {
                                modelData[field.name] = null;
                            }
                            break;
                    }
                }
            }
        }
    }
    return modelData;
};

const HandlePrimitiveArray = function(array) {
    let arr = [];
    if (array.length <= 0) {
        return arr;
    }
    for (let item in array) {
        arr[item] = HandlePrimitiveValue(array[item]);
    }
    return arr;
};

const HandleTrimWhiteSpaceValue = function(value, type) {
    let val = undefined;
    if (Array.isArray(value)) {
        val = HandleTrimWhiteSpaceArray(value, type);
    } else {
        switch (typeof value) {
            case 'string':
                if (type === 'normal') {
                    val = value.trim();
                } else if (type === 'html') {
                    val = value.replace(/^&nbsp;|\&nbsp;$/gm, '');
					val = val.trim();
                } else {
                    val = value.replace(/^&nbsp;|\&nbsp;$/gm, '');
                    val = val.trim();
                }
                break;
            case 'object':
                val = HandleTrimWhiteSpaceObject(value, type);
                break;
            default:
                val = value;
                break;    
        }
    }
    return val;
};

const HandleTrimWhiteSpaceArray = (array, type) => {
    let arr = [];
    if (array.length <= 0) {
        return arr;
    }
    for (let item in array) {
        arr[item] = HandleTrimWhiteSpaceValue(array[item], type);
    }
    return arr;
}

const HandleTrimWhiteSpaceObject = (object, type) => {
    let obj = {};
    for (let item in object) {
        obj[item] = HandleTrimWhiteSpaceValue(object[item], type);
    }
    return obj;
}

const TrimWhiteSpaceData = (data, type) => {
    let formatData = null;
    if (Array.isArray(data)) {
        formatData = [];
        formatData = HandleTrimWhiteSpaceArray(data, type);
    } else if (typeof data === 'object') {
        formatData = {};
        formatData = HandleTrimWhiteSpaceObject(data, type);
    } else if (typeof data === 'string') {
        formatData = HandleTrimWhiteSpaceValue(data, type);
    }
    return formatData;
}

module.exports = {
    GetCachingData,
    SetCachingData,
    MapFormToModelData,
    MapFormToModelDataWithFile,
    MapFormToModelDataOnlyFile,
    TrimWhiteSpaceData,
    HandleTrimWhiteSpaceValue,
    HandleTrimWhiteSpaceArray,
    HandleTrimWhiteSpaceObject
};