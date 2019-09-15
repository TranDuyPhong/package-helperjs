const ASCII = require('./ascii');
const Primitive = require('./primitive');
const Data = require('./data');
const UI = require('./ui');

module.exports = {
    ...ASCII,
    ...Primitive,
    ...Data,
    ...UI
};