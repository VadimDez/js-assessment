exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

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
        permutations.push(arr);
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

  }
};
