let timeDefault = 200;

const SearchDelayData = function(target, time = timeDefault, callBack) {
    if (!target || typeof target === undefined || typeof target === 'undefined' || typeof target === null || isNaN(target)) {
        throw new "Parameter 'target' is not a element";
    }
    if (time < timeDefault) {
        throw new `Parameter 'time' must than or equal ${timeDefault}`;
    }
    let $source = target;
    let value = '';
    let timeOut = null;
    const onChange = function(e) {
        value = e.target.value;
        if (timeOut !== null) {
            clearTimeout(timeOut);
        }
        timeOut = null;
        timeOut = setTimeout(function() {
            callBack($source, value);
        }, time);
    }
    $source.addEventListener('input', onChange);
    return {
        target: $source,
        value
    }
};

module.exports = {
    SearchDelayData
};