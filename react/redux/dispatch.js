const CombineDispatchToProps = (dispatch, bindActionCreators, operations) => {
    let actions = {};

    if (!Array.isArray(operations)) {
        throw new 'Operations is not a array';
    }

    for (let operation of operations) {
        if (!operation[0]) {
            continue;
        }
        let operationTemp = [];
        Object.assign(operationTemp, operation);
        for (let action in operationTemp[0]) {
            if (typeof operationTemp[0][action] === 'function') {
                let actionName = action;
                if (operationTemp[1]) {
                    if (operationTemp[1][actionName] !== undefined && typeof operationTemp[1][actionName] !== 'undefined') {
                        actionName = operationTemp[1][actionName];
                    }
                }
                actions[operationTemp[0].toString()] = {
                    ...actions[operationTemp[0].toString()],
                    [actionName]: bindActionCreators(operationTemp[0][action], dispatch)
                };
            }
        }
    }

    return actions;
};

module.exports = {
    CombineDispatchToProps
};