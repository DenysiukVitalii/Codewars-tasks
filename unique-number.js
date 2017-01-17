function findUniq(arr) {
arr.sort();
console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i-1] != arr[i] && arr[i+1] != arr[i]) return arr[i];
  }
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
//
// Test.assertEquals(findUniq([ 0, 1, 0 ]) , 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]) ,2);
