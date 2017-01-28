function isValidIP(str) {
  var check = str.split('');
  for (var i = 0; i < check.length; i++) if(check[i] == " ") return false;
  var arr = str.split('.').map(i => +i);
  var count = 0;
  if (arr.length < 4) return false;
  for (var i = 0; i < arr.length; i++)
  if (arr[i] >= 0 && arr[i] < 256) ++count;
  return count == 4 ? true : false;
}

console.log(isValidIP('1.2.3.4'));
