const revStr = (str) =>{
    console.log(str);

    // str = str.split(" ").map((word)=>{
    //     return word.split("").reverse().join("");
    // })
    // console.log(str.join(" "));

    let arr = str.split("")

    console.log(arr);
    let i = 0;
    let j = arr.length;

    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    console.log(arr.join(""));


    
}

revStr("I am Arjun")