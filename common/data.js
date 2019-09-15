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

module.exports = {
    GetCachingData,
    SetCachingData
};