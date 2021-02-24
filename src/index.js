/* jshint esversion: 6 */
exports.min = function min (array) {
  if (Array.isArray(array) && !array.length || !array) {
    return 0;
  }
  let result;
  let compareNum = array[0];
  for (const item of array) {
    if (item <= compareNum) {
      compareNum = item;
      result = item;
    }
  }
  return result;
};

exports.max = function max (array) {
  if (Array.isArray(array) && !array.length || !array) {
    return 0;
  }
  let result;
  let compareNum = array[0];
  for (const item of array) {
    if (item >= compareNum) {
      compareNum = item;
      result = item;
    }
  }
  return result;
};

exports.avg = function avg (array) {
  if (Array.isArray(array) && !array.length || !array) {
    return 0;
  }
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum / array.length;
};
