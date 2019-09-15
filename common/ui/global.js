let isMap = true;

const CallLazyLoadData = function(target, offSet, callBack) {
    if (!target || typeof target === undefined || typeof target === 'undefined' || typeof target === null || isNaN(target)) {
        throw new "Parameter 'target' is not a element";
    }
    if (typeof callBack === undefined || typeof callBack === 'undefined' || typeof callBack === null || isNaN(callBack) || typeof callBack !== 'function'){
        throw new "Parameter 'callBack' is not a function";
    }
    let $source = target;
    $source.onscroll = function(e) {
        const offsetHeight = e.target.offsetHeight;
        const scrollTop = e.target.scrollTop;
        if ((offsetHeight - scrollTop) <= offSet && isMap === true) {
            isMap = false;
            callBack(this);
        } else if ((offsetHeight - scrollTop) > offSet) {
            isMap = true;
        }
    }
};

module.exports = {
    CallLazyLoadData
};