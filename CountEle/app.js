const countEle = (str)=>{
    let obj = {};
    str.forEach((elem)=>{
        if(obj.hasOwnProperty(elem)){
            obj[elem]++;
        }
        else{
            obj[elem] = 1;
        }

    })
    
    console.log(obj);

}

countEle([1,2,3,1,3,5,2,3]);