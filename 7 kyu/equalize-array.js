function equalize(array){
  adder = array[0];
  return array = array.map( (el) => {el-=adder; if (el >= 0) { return "+" + el;} else return el + ""; });
}
console.log(equalize([10,20,30,0]));
