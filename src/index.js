module.exports = function multiply(first, second) {
  // your solution
  first = BigInt(first);
  second = BigInt(second);
  let mult = (first * second).toString();  
  return mult;
}
