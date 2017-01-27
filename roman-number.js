function solution(roman){
 var M = 1000, D = 500, C = 100, L = 50, X = 10,V = 5, I = 1;
 var arr = roman.split('');
 return arr.map((item) => {
   switch (item, i, arr) {
     case 'M': { item = 1000; break; }
     case 'D': { item = 500; break; }
     case 'C': { item = 100; break; }
     case 'L': { item = 50; break; }
     case 'X': { item = 10; break; }
     case 'V': { item = 5; break; }
     case 'I': { item = 1; break; }
     default: break;
   }
   return item;
 });

}

function solution(roman) {
  var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
}

console.log(solution("XIX"));
