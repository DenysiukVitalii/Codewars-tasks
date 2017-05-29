function uniq(a){
  return a.reduceRight((prev, next) => {
      if (prev.length != 0 && prev[0] == next) {
        return prev;
      } else {
        prev.unshift(next);
        return prev;
      }
    }, []);
}

var input = ['a','a','b','b','c','a','b','c'];
console.log(uniq(input));
