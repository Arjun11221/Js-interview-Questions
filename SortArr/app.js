const  checkArr = (arr)=>{
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr);
}

checkArr([8,7,3,5,6,2,1,3,5]);