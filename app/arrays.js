exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (total, value) {
      return total + value;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function (value) {
      return value !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var index;

    while ((index = arr.indexOf(item, index)) !== -1) {
      arr.splice(index, 1);
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function (total, value) {
      return total + ((value === item) ? 1 : 0);
    }, 0);
  },

  duplicates : function(arr) {
    var unique = {};
    var length = arr.length;
    var result = [];

    for (var i = 0; i < length; i++) {
      unique[arr[i]] = (unique[arr[i]] || 0) + 1;
    }

    for (var key in unique) {
      if (unique[key] > 1) {
        result.push(parseInt(key, 10));
      }
    }

    return result;
  },

  square : function(arr) {
    return arr.map(function (value) {
      return Math.pow(value, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    var index;

    while ((index = arr.indexOf(target, index)) !== -1) {
      occurrences.push(index++);
    }

    return occurrences;
  }
};
