function solve(str){
 let result = "";
 str = str.split('').reverse().join('');
 
 while (str.includes(")")) {
     str = str.slice(1)
 }

 for (let i = 0; i < str.length; i++) {
     if (str[i] !== "(" && isNaN(str[i])) {
         result += str[i];
     } else if (str[i] === "(" && !isNaN(+str[i+1])) {
         result = result.repeat(+str[i+1]);
     } else {
         continue;
     }
 }

 return result.split('').reverse().join('');
}

console.log(solve("3(ab)")); // "ababab"
console.log(solve("2(a3(b))")); // "abbbabbb"
console.log(solve("3(b(2(c)))")); // "bccbccbcc"
console.log(solve("k(a3(b(a2(c))))")); // "kabaccbaccbacc"