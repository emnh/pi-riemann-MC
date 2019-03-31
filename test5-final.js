// noprotect

var piCalculation = function() {
  var maxi = new Big(100000000);
  var ox = new Big(0.0);
  var ofx = new Big(0.0);
  var s = new Big(0.0);
  var ct = 0;
  //for (var i = new Big(0); i.cmp(maxi) < 0; i = i.plus(new Big(1))) {
  ////
  var start = new Date().getTime();
  for (var i = 0; i < maxi.valueOf(); i++) {
    var x = new Big(i).div(maxi);
    var y = new Big(x).times(new Big(x));
    y = new Big(1).minus(y);
    y = y.sqrt();
    fx = y;
    var dx = new Big(x).minus(new Big(ox));
    s = s.plus(fx.times(dx));
    var ofx = fx;
    var ox = x;
    ct += 1;
  }
  var end = new Date().getTime();
  var elapsed = (end - start) / 1000.0;
  console.log(["elapsed", elapsed]);
  console.log(ct);

  return s.times(new Big(4.0)).valueOf();
}

console.log(piCalculation());

/*
var s = new Big(0);
var total = new Big(0);

var piMonteCarlo = function() {
  for (var i = 0; i <= 10000000; i++) {
    var x = new Big(Math.random() * 2.0 - 1.0);
    var y = new Big(Math.random() * 2.0 - 1.0);
    var inout = x.times(x).plus(y.times(y));
    inout = inout.sqrt();
    if (inout.cmp(1.0) <= 0) {
      s = s.plus(1);
    }
    total = total.plus(1);
  }
  console.log(s.valueOf());
  console.log(total.valueOf());
  return s.div(total).times(4.0);
}

//var x = piMonteCarlo();
//console.log(4.0 * x.valueOf());

var diffMeasurement = function() {
  var sum = new Big(0.0);
  var count = new Big(0);
  var piSum = new Big(0.0);

  for (var i = 0; i <= 1; i++) {
    //var piCalc = piCalculation();
    var piCalc = piMonteCarlo();
    piSum = piSum.plus(piCalc);
    var diff = new Big(3.145926).minus(piCalc);
    sum = sum.plus(diff);
    count = count.plus(1);
  }
  var avg = sum.div(count);
  var piAvg = piSum.div(count);
  console.log(avg.valueOf());
  console.log(piAvg.valueOf());
  setTimeout(diffMeasurement, 10);
}

//setTimeout(diffMeasurement, 1000);
*/
