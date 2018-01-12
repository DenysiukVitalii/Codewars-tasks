function sum(...args) {
    let currentSum = args.reduce((a, b) => a + b);

    function f(...args) {
        currentSum += args.reduce((a, b) => a + b);
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log(sum(1,2).toString()); // 3
console.log(sum(1)(2).toString()); // 3
console.log(sum(1,2)(3).toString()); // 6
console.log(sum(1,2)(3,4).toString()); // 10