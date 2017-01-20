function oneTwoThree(n) {
    var arr = [];
    var num_first = n + '';

    function first(n) {
      var num_second = num_first.split('').map((item) => {return +item;});
      num_second = num_second.reduce(function(sum, current) { return sum + current });
      return ( n > 9 ) ? '9'.repeat(num_first[0]) + num_second : num_first.repeat(num_first[0]) + num_second;
    }

   arr.push(first(n));
   console.log(arr);
   function second(n) {
      var num2 = first(n).split('').map((item) => {return +item;});
      num2 = num2.reduce(function(sum, current) { return sum + current });
      return '1'.repeat(num2);
    }

  arr.push(second(n));
  console.log(arr);
    return arr;
}

oneTwoThree(98);
