let fact = 1;
let num = prompt("Enter Number For Factorial: ");

for(let i = 2; i<=num; i++){
    fact *= i;
}

console.log(fact);