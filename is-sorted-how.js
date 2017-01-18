function isSortedAndHow(array) {
var a = 0, d = 0;
 for (var i = 0; i < array.length - 1; i++) {
   if (array[i] <= array[i + 1]) a++;
   if (array[i] >= array[i + 1]) d++;
  }
  return (a == array.length - 1) ? 'yes, ascending' : (d == array.length - 1) ?
   'yes, descending' : 'no';
 }
