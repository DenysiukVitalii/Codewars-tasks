function clean_string(s) {
 let arr = s.split('');
 for(var i = 0; i < arr.length; i++){
  if (arr[0] =='#') arr.splice(0, 1);
  if (arr[i] =='#' && i != 0){
    arr.splice(i-1, 2);
    i = 0;
  }
 }
 return arr.join("");
};

console.log(clean_string('abc#d##c'));
