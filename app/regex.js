exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /[0-9]/g.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-z])\1/gi.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiou]$/gi.test(str);
  },

  captureThreeNumbers : function(str) {
    var matched = str.match(/[0-9]{3}/g);

    if (!matched) {
      return false;
    }

    return matched[0];
  },

  matchesPattern : function(str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
  },
  isUSD : function(str) {
    return /^\$([0-9]{1,}((.|,)[0-9]{2,}|$))+/g.test(str);
  }
};
