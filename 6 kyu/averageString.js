function averageString(str) {
  let numbers = ['zero', 'one', 'two', 'three', 'four',
                 'five', 'six', 'seven', 'eight', 'nine'];
  let isWrong = false;
  let data = str.split(' ');
  let result = [];

  data.forEach((i) => {
    if (!!~numbers.indexOf(i) == false) isWrong = true;
  })
  if (isWrong || str == '') return 'n/a';

  data.map((el) => result.push(numbers.indexOf(el)));

  return numbers[Math.floor(result.reduce((a,b) => a + b) / data.length)];
}

console.log(averageString("zero nine five two"));
