function mirror(text){
text = text.split(' ').map((word) => {return word.split('').reverse().join('')});
let maxL = text.reduce((max, current) => {
return current.length > max ? current.length : max;
}, 0);

let space = 0;
for (var i = 0; i < text.length; i++) {
  if (text[i].length < maxL)
  {
    space = maxL - text[i].length;
    space = " ".repeat(space + 1);
    text[i] = '\n* ' + text[i] + space + '*';
  } else text[i] ='\n* ' + text[i] + ' *';
}

let result = "";
result = "*".repeat(maxL + 4) ;

return result  + text.join('') + '\n' + result;
}
console.log(mirror('Hello world'));

//'*********\n* olleH *\n* dlroW *\n*********'
