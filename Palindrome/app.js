const isPalindrome = (str) => {

    str = str.toLowerCase();
    const newStr = str.split("");
    let n = newStr.length;
    let flag = true;

    for(let i = 0, j = n-1; i<n-1; i++,j--){
        if(newStr[i] !== newStr[j]){
            flag = false;
            break;
        }
    }

    if(flag===true){
        console.log("String is Palindrome");
    }else{
        console.log("String isn't Palindrome");
    }
    
    return str; 
}

const palin = isPalindrome("amit");

console.log(palin);