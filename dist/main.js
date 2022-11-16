(() => {
  'use strict';
  function e(e, n) {
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  var n = new ((function () {
    function n() {
      !(function (e, n) {
        if (!(e instanceof n))
          throw new TypeError('Cannot call a class as a function');
      })(this, n);
    }
    var o, r;
    return (
      (o = n),
      (r = [
        {
          key: 'makeSound',
          value: function () {
            return 'bow wow';
          },
        },
      ]) && e(o.prototype, r),
      Object.defineProperty(o, 'prototype', { writable: !1 }),
      n
    );
  })())();
  console.log(n.makeSound()), console.log(3), console.log('hello');
})();
