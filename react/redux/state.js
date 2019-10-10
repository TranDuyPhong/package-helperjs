const CombineStateToProps = (state, reducers) => {
    let states = {};

    if (!Array.isArray(reducers)) {
        throw new 'Reducers is not a array';
    }

    for (let reducer of reducers) {
        if (!reducer[0]) {
            continue;
        }
        const getReducer = {};
        Object.assign(getReducer, state[reducer[0]]);
        if (getReducer) {
            if (reducer[1]) {
                for (let item in reducer[1]) {
                    const getState = getReducer[item];
                    if (getState !== undefined && typeof getState !== 'undefined') {
                        getReducer[reducer[1][item]] = getState;
                        delete getReducer[item];
                    }
                }
            }
            states[reducer[0]] = getReducer;
        }
    }

    return states;
};

module.exports = {
    CombineStateToProps
};