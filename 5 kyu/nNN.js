nNN = a => (a+='').match(/(.),\1{2}/g)==a
console.log(nNN([1,11,2,22,4,04]));
