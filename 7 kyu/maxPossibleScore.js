function maxPossibleScore(obj, arr) {
  return Object.keys(obj)
               .map((el) => (!!~arr.toString().indexOf(el)) ? obj[el] * 2 : obj[el])
               .reduce((prev, sum) => prev + sum);
}

console.log(maxPossibleScore({"Codewars": 2, "Awesome": 5, "All": 8}, ["codewars", "Awesome"]));
