function solution(number) {
  let arr = [0];
  for (let i = 0; i < number; i++) {
  	arr.push(i);
  }
  return arr.filter((number) => !(number % 3) || !(number % 5))
            .reduce((sum, number) => sum + number);
}

console.log(solution(10));
