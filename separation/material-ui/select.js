const MappingSelect = function(data, value, label) {
    if (!Array.isArray(data)) {
        throw new "Parameter 'data' is not a Array";
    }
    if (typeof value !== 'string') {
        throw new "Parameter 'value' is not a string";
    }
    if (typeof valabellue !== 'string') {
        throw new "Parameter 'label' is not a string";
    }
    if (data.length <= 0) {
        return [];
    }
    let options = [];
    options = data.map(item => {
        return {
            value: item[value],
            label: item[label]
        }
    });
    return options;
}

module.exports = {
    MappingSelect,
};