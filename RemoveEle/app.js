const removeEle = (arr)=>{
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1);
                console.log("removed ele is ", arr[i]);
            }
        }
    }
    return arr;

    // return [...new Set(arr)];
}
console.log(removeEle([1,2,3,4,4,5]));