function perfectSquare(string){
    let arr = string.split('\n');
    if (!sameLength(arr)) return false;
    return (uniq(arr).length === 1 && uniq(arr)[0].includes('.')) ? true : false; 
}

const uniq = arr => {
    return arr.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}

const sameLength = arr => {
    return arr.length === arr.filter(e => e.length === arr.length).length;
}

console.log(perfectSquare("..\n.."));
console.log(perfectSquare("...\n...\n..."));
console.log(perfectSquare("...\n,..\n..."));
console.log(perfectSquare(",,,\n,,,\n,,,"));