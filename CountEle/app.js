// const countEle = (str)=>{
//     let obj = {};
//     str.forEach((elem)=>{
//         if(obj.hasOwnProperty(elem)){
//             obj[elem]++;
//         }
//         else{
//             obj[elem] = 1;
//         }
//     })
//     console.log(obj);
// }

// countEle([1,2,3,1,3,5,2,3]);


const countEle = (ele)=>{
    let obj = {};
    ele.forEach((item)=>{
        if(obj.hasOwnProperty(item)){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    })
    console.log(obj);
}

countEle([1,2,3,2,1,2,2,3,1,4,5]);