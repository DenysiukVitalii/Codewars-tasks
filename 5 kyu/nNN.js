nNN = a => (a+='').match(/(.),\1{2}/g)==a

nNN=a=>!a.reduce((a,b)=>a*11^b)

console.log(nNN([1,11,2,22,4,04]));
