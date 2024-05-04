const findMin = (arr)=>{
    let min = Number.MAX_VALUE;
    let smin = Number.MAX_VALUE;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]<min) {
            smin = min;
            min = arr[i];
        }
        else if(arr[i]<smin && arr[i]!= min){
            smin = arr[i];
        }
    }
    console.log(min);
    console.log(smin);

}

findMin([3,5,1,6,-1,-3,5,2,5])