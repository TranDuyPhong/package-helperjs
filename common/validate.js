const HasValue = (value) => {
    return (value !== undefined && typeof value !== 'undefined');
};

const TryParseValue = (value) => {
    return HasValue(value) === true ? value : null;
};

module.exports = {
    HasValue,
    TryParseValue
};