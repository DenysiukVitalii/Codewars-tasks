function sc(k){
  let l = [], r = [];
  k.sort((a, b) => a - b).forEach((i, j) => { j % 2 ? r.unshift(i) : l.push(i);})
  return l.concat(r);
}
