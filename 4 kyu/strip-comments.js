function solution(input, markers){
  var arr = input.split(' '), count = 0;
  arr.forEach((item,i) => {
    markers.forEach((el) => {
      if (item == el) count = i;
    })
  });
  console.log(arr);
  var newarr = arr.slice(0, count);
  return newarr;
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
