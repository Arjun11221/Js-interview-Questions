const arr = [1,2,3,4,9];

let misEle = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
        misEle.push(i + 1);
        break;
    }
}

console.log(misEle);
