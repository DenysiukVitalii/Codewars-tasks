function digPow(n, p){
  var num = (n + "").split('').map((item, i) => { return item = Math.pow(+item, p + i);}).reduce((sum, next) => { return sum + next;}) / n;
  return  (num ^ 0) === num ? num : -1;
}
console.log(digPow(46288, 3));
