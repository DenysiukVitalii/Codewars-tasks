function isLucky(ticket) {
  var arr = ticket.split('').map(e => +e);
  if (arr.length != 6) return false;
  var arr1 = arr.splice(0, 3);
  var sum1 = arr1.reduce((sum, prev) => sum + prev);
  var sum2 = arr.reduce((sum, prev) => sum + prev);
  if (sum1 == sum2) return true; else return false;
}

console.log(isLucky('123321'));
