exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function (str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(x => {
      return function () {
        return fn(x);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce(function (sum, value) {
      return sum + value;
    }, 0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return function () {
      return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
  },

  curryIt : function(fn) {
    var that;
    var args = Array.prototype.slice.call(arguments, 1);

    that = this;
    return function () {
      //if (args.length === (this.curryIt.length - 1)) {
      //  return fn.apply(null, args);
      //}
      return that.curryIt.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
  }
};
