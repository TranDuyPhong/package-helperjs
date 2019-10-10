const MapModelToUrl = (url, model) => {
    let result = url;
    let regex = new RegExp(/{.*?}+/g);
    let match = null;
    let field = '';
    let value = undefined;

    while (true) {
        match = regex.exec(url);
        if (match === null) {
            break;
        }
        if (match[0]) {
            field = match[0].replace('{', '').replace('}', '');
            value = model[field];
            if (value !== undefined && typeof value !== 'undefined') {
                result = result.replace(match[0], value);
            } else {
                console.warn(`Field '${field}' not contain in model`);
            }
        }
    }

    return result;
};

module.exports = {
    MapModelToUrl
};