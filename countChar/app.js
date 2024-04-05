const countChar = (str, alpha)=>{
    str = str.toLowerCase();
    alpha = alpha.toLowerCase();

    let count = 0;
    const newStr = str.split("");
    
    console.log(newStr);

    for(let i = 0; i<newStr.length; i++){
        if(newStr[i] === alpha) count++;
    }

    console.log(count);

}

countChar("MissIssipi", "I");