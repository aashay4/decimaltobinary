const BigNumber = require('bignumber.js');
module.exports.decimal = decimal =>
{
input = decimal;
var output;
//const b2t = require('b2tconverter')
var x = new BigNumber(input, 10)
    var dectobin = x.toString(2);
    return dectobin;
}
