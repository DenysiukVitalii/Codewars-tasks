function encrypt(sym, count) {
 return sym.split('').map(item => String.fromCharCode((item.charCodeAt(0) + count) % 256)).join('');
}
console.log(encryption("please encrypt me", 2));
