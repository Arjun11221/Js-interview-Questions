// To Find The Largest Element in the Array

// const arr = [5,7,9,3,10];

// let max = Number.MIN_VALUE;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max) max = arr[i];
// }

// console.log(max);

// // S.C => O(1)
// // T.C => O(n)


// To Find The Second Largest Element in the Array

const arr = [5,7,9,3,12];

let max = Number.MIN_VALUE;
let smax = Number.MIN_VALUE;

for(let i = 0; i<arr.length; i++){
    if(arr[i]>max){
        smax = max;
        max = arr[i];
    }
    else if(arr[i]>smax && arr[i]!= max) {
        smax = arr[i];
    }
}

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>smax && arr[i]!=max){
//         smax = arr[i];
//     }
// }

console.log(max);
console.log(smax);





