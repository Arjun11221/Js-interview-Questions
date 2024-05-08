const calculateMean = (arr)=>{
    // let sum = 0;
    // for(let i = 0; i<arr.length; i++){
    //     sum += arr[i];
    // }

    // let avg = sum/arr.length;
    // console.log(avg);

    let sum = arr.reduce((acc, currEle)=> acc + currEle
    ,0);
    console.log(sum);
    let avg = sum/arr.length;
    console.log(avg);
}

calculateMean([1,2,3,4,5])