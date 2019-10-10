const ASCII = require('./ascii');
const Primitive = require('./primitive');
const Data = require('./data');
const UI = require('./ui');
const Url = require('./url');
const Global = require('./global');
const Validate = require('./validate');

module.exports = {
    ...ASCII,
    ...Primitive,
    ...Data,
    ...UI,
    ...Url,
    ...Global,
	...Validate
};