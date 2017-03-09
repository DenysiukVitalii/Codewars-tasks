function getMiddle(s) {
  let middle = s.length / 2;
  return s.length % 2 == 0 ? s.slice(middle - 1 , middle + 1) : s.slice(middle, middle + 1);
}

const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

console.log(getMiddle("middle"));
