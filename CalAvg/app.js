const calAvg = (arr)=>{

    let sum = 0;

    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }

    console.log(sum);

    let avg = 0;
    avg = sum / arr.length;

    console.log(avg);

}

calAvg([5,10,2,8]);