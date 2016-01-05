exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];

    function rec(data, dirName) {
      if (data.constructor === Array) {
        data.forEach(function(value) {
          rec(value, dirName);
        });
      } else if (data.constructor === Object) {
        if (dirName && data.dir === dirName) {
          dirName = null;
        }
        rec(data.files, dirName);
      } else if (data.constructor === String && !dirName) {
        result.push(data);
      }
    }

    rec(data, dirName);

    return result;
  },

  permute: function(arr) {
    var permutations = [];

    function swap(a, b) {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }

    // heap's
    function generate(n) {
      if (n === 1) {
        permutations.push(arr.slice(0));
      } else {
        for (var i = 0; i < n - 1; i++) {
          generate(n - 1);
          swap((n % 2) ? 0 : i, n - 1);
        }
        generate(n - 1);
      }
    }

    generate(arr.length); // get all permutations

    return permutations;
  },

  fibonacci: function(n) {
    if (n <= 0) {
      return 0;
    }

    if (n <= 1) {
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var permutations = [];

    function generate(opened, closed, pairs, permutation) {
      if (opened === pairs && closed === pairs) {
        permutations.push(permutation);
        return;
      }

      if (opened < pairs) {
        generate(opened + 1, closed, pairs, permutation + '(')
      }

      if (closed < opened) {
        generate(opened, closed + 1, pairs, permutation + ')')
      }
    }

    generate(0, 0, n, '');

    return permutations;
  }
};
