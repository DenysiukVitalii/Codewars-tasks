function spinWords(str){
  return str.split(' ').map((e) => {
    if (e.length > 4) e = e.split('').reverse().join('');
    return e;
  }).join(' ');
}

//best practices

const spinWords = (string) => string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') });

const spinWords = (str) => str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');


console.log(spinWords( "Hey fellow warriors" )); // returns "Hey wollef sroirraw"
