/*function countSmileys(arr) {
  var count = 0;
  function check(str) {
    if (str.length == 2) {
      if ((str[0] == ":" || str[0] == ";") && (str[1] == ")" || str[1] == "D")) count++; else  return 0;
    } else
    if (str.length == 3) {
      if ((str[0] == ":" || str[0] == ";") && (str[1] == "-" || str[1] == "~") && (str[2] == ")" || str[2] == "D")) count++; else  return 0;
    } else return 0;
    return count;
  }
  return arr.filter( (item) => check(item) > 0 ).length;
}
*/
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
