exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return parseInt(num.toString(2).split('').reverse()[bit - 1], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binaruString =  (num >>> 0).toString(2);

    while (binaruString.length < 8) {
      binaruString = '0' + binaruString;
    }

    return binaruString;
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toPrecision(1));
  }
};
