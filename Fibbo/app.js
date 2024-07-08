const fibbo = (num)=>{
    if(num<=1){
        return num;
    }else{
        return fibbo(num-1)+fibbo(num-2);
    }
}

console.log(fibbo(0));
console.log(fibbo(1));
console.log(fibbo(2));
console.log(fibbo(3));
console.log(fibbo(4));
console.log(fibbo(5));
console.log(fibbo(6));