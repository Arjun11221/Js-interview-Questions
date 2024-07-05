const mode = (arr)=>{
    let obj = {};
    let maxValue = 0;
    let findMode ;

    arr.forEach((ele)=>{
        if(obj.hasOwnProperty(ele)){
            obj[ele]++;
        }
        else{
            obj[ele] = 1;
        }
        if(obj[ele]>maxValue){
            maxValue = obj[ele];
            findMode = ele;
        }

    });

    console.log(findMode);

}
mode([1,3,2,4,1,2,3])