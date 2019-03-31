var Big = require('big.js');

var maxi = 1000;
var ox = 0.0;
var ofx = 0.0;
var s = new Big(0.0);
for (var i = 0; i <= maxi; i++) {
  var x = i / maxi;

  var y = new Big(x).times(new Big(x));
  y = y.sqrt();
  var fx = y; //Math.sqrt(1 - x * x);
  var dx = x - ox;
  var dy = fx - ofx;
  //console.log([i, ox, x, ofx, fx]);
  s = s.plus(fx.times(dx));
  var ofx = fx;
  var ox = x;
}
console.log(4.0 * s);
