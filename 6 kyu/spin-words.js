function spinWords(str){
  return str.split(' ').map((e) => {
    if (e.length > 4) e = e.split('').reverse().join('');
    return e;
  }).join(' ');
}

console.log(spinWords( "Hey fellow warriors" )); // returns "Hey wollef sroirraw" 
