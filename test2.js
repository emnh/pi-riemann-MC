var Big = require('big.js');

var diffMeasurement = function() {
  var maxi = new Big(100);
  var ox = 0.0;
  var ofx = 0.0;
  var s = new Big(0.0);
  for (var i = new Big(0); i.cmp(maxi) < 0; i = i.plus(1)) {
    var x = new Big(i).div(maxi);

    var y = new Big(x).times(new Big(x));
    y = new Big(1).minus(y);
    y = y.sqrt();
    //var fx = Math.sqrt(1 - x * x);
    fx = y;
    var dx = new Big(x).minus(new Big(ox));
    //var dy = fx - ofx;
    //console.log(
    //  [i.valueOf(), ox.valueOf(), x.valueOf(),
    //  ofx.valueOf(), fx.valueOf()]);
    s = s.plus(fx.times(dx));
    var ofx = fx;
    var ox = x;
  }
  
  return s.times(new Big(4.0)).valueOf();
}

var timeLoop = function() {
  var sum = 0.0;
  var count = 0;
  for (var i = 0; i <= 100; i++) {
    var piCalc = diffMeasurement();
    var diff = 3.1415926 - piCalc;
    sum += diff;
    count += 1;
  }
  var avg = sum / count;
  console.log(avg);
  setTimeout(timeLoop, 1000);
}

setTimeout(timeLoop, 1000);
