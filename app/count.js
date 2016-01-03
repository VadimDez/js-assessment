exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var Counter = function (start, end) {
      this.start = start;
      this.end = end;
      this.i = start;
      this.count();
    };

    Counter.prototype.count = function () {
      var that = this;

      console.log(that.i++);
      this.interval = setInterval(function () {
        if (that.i >= that.end) {
          clearInterval(that.interval);
        }

        console.log(that.i++);
      }, 100);
    };

    Counter.prototype.cancel = function () {
      clearInterval(this.interval);
    };

    return new Counter(start, end);
  }
};
