function sumR(x) {
  if (x.length == 0) return 0;
  return x.reduce( (pr,cur) => pr + cur, 0);
}
