const countEle = (arr)=>{
    let obj = {};

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) {
                obj[i] = arr[i+1];
            }
        }
    }

    console.log(obj);

}

countEle([1,2,1,3,4,2,1,3]);