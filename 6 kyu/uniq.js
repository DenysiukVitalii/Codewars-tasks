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

// best practices

const uniq = a => a.filter((el, i) => i == 0 || !(a[i-1] == el));

var input = ['a','a','b','b','c','a','b','c'];
console.log(uniq(input));
