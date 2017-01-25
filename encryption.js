function encrypt(sym, count) {
 return sym.split('').map(item => String.fromCharCode(item.charCodeAt() + count)).join('');
}

console.log(encryption("please encrypt me", 2));
