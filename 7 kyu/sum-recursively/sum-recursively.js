const sumR = arr => !arr.length ? 0 : arr[0] + sumR(arr.slice(1));

module.exports = sumR;