let str = prompt("Enter String : ")

let newStr = str.split(" ").map((word) => {
  return word[0].toUpperCase() + word.substring(1);
});

console.log( '#' + newStr.join(""));
console.log(str);
