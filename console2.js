// units : 100
// slabs :
// 1-50: 3rs
// 51-100: 5rs
// 101 - 7rs
/*
units : 200 150 + 250 + 350
amount: 693 + 245 + 450
units: 100
101-200: 99 * 7 = 693
 51-100:49*5 = 245
 50*3:150
 */

function isHigherslab(units) {
  return units > 100;
}
function isMiddleslab(units) {
  return units > 50;
}
function isLowerslab(units) {
  return units > 0;
}
function calculateAmount(units, rate) {
  return units * rate;
}

function calc(units) {
  if (!units) throw new error("invalid input");
  var amount = 0;
  if (isHigherslab(units)) {
    var noOfunits = units - 100;
    //amount + amount +
    // calculateAmount(noOfunits,7);
    amount += calculateAmount(noOfunits, 7);
    units -= noOfunits;
  }
  if (isMiddleslab(units)) {
    var noOfunits = units - 50;
    amount += calculateAmount(noOfunits, 5);
    units -= noOfunits;

    if (isLowerslab(units)) {
      amount += calculateAmount(units, 3);
    }

    return amount;
  }
}
var res = calc(500);
console.log(res);