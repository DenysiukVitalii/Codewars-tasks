/*function isValidIP(str) {
  var check = str.split('');
  for (var i = 0; i < check.length; i++) if(check[i] == " ") return false;
  var arr = str.split('.').map(i => +i);
  var count = 0;
  if (arr.length < 4) return false;
  for (var i = 0; i < arr.length; i++)
  if (arr[i] >= 0 && arr[i] < 256) ++count;
  return count == 4 ? true : false;
}
*/
/*
function isValidIP(str) {
  var check = str.split('');
  if (check.some(i => i == " ")) return false; else {
    var arr = str.split('.');
    if(arr.length != 4) { return false; }
    return !arr.some((i) => {
      if( isNaN(i) || i - '' > 255) return true;
    });
  }
}
*/

// REGULAR EXPRESSION
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

console.log(isValidIP('1.2.3.4'));
