
const sumOfDigits = (num) => {
    let str = num.toString().split("").map(Number);
    let count = 0;
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        count += str[i];
    }
    console.log(count);
}

sumOfDigits(12345);


// const sumOfDigits = (num) => {
    
    
//     console.log(num);
//     let rem = 0;
//     let x = 0;
//     while(num>0){
//         rem = num%10;
//         x += rem; 
//         num = Math.floor(num / 10);
//     }
//     console.log(x);
// }

// sumOfDigits(12345);



// Note : 

// let strings = ["1", "2", "3"];
// let numbers = strings.map(Number);

// console.log(numbers); // [1, 2, 3]
