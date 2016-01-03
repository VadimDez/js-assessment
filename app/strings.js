exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var counter = 0;
    var length = str.length;
    var result = '';

    for (var i = 0; i < length; i++) {
      if (str[i-1] === str[i]) {
        counter++;
      } else {
        counter = 0;
      }

      if (counter < amount) {
        result = result.concat(str[i]);
      }
    }

    return result;
  },
  wordWrap: function(str, cols) {
    return str.replace(/ /g, '\n');
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
