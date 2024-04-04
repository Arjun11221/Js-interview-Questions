let str = prompt("Enter the length : ");

let maxStr = "";

let newStr = str.split(" ");

newStr.forEach((word)=> {
    if(word.length > maxStr.length ){
        maxStr = word;
    }
});


// for(let i = 0; i<newStr.length; i++){
//     // console.log(newStr[i]);
//     if(newStr[i].length > maxStr.length) {
//         maxStr = newStr[i];
//     }
// }

console.log(maxStr); 

console.log(newStr); 