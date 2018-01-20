function isLucky(ticket) {
  if (!ticket || ticket.length != 6) return false;
  var arr = ticket.split('').map(e => +e);
  var arr1 = arr.splice(0, 3);
  var sum1 = arr1.reduce((sum, prev) => sum + prev);
  var sum2 = arr.reduce((sum, prev) => sum + prev);
  if (sum1 == sum2) return true; else return false;
}

module.exports = isLucky;