function humanReadable(sec) {
  var s = sec % 60,
      m =  parseInt(sec % 3600 / 60),
      h = parseInt(sec / 3600);
  var addZero = (value) => value < 10 ? "0" + value : value;
  return addZero(h) + ":" + addZero(m) + ":" + addZero(s);
}
console.log(humanReadable(86399));
