
const isPowerOfTwo = (num)=>{
    let op = false;

    for(let i = 0; i<num; i++){
        if(2**i===num) {
            op = true;
            break;
        }
    }
    return op;
}

console.log(isPowerOfTwo(7));