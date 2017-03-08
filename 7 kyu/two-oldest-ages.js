const twoOldestAges = (ages) => ages.sort((a,b) => a - b).slice(ages.length - 2);

console.log([1,5,6,2]);
