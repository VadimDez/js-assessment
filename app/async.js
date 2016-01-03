exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    function sort(a, b) {
      return a.name > b.name;
    }
    return new Promise((resolve, reject) => {
      $.ajax(url).done(data => {
        resolve(data.people.sort(sort).map(object => {
          return object.name;
        }));
      }).fail(err => {
        reject(err);
      })
    });
  }
};
