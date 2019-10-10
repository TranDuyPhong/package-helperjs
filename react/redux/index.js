const Dispatch = require('./dispatch');
const State = require('./state');

module.exports = {
    ...Dispatch,
    ...State
}