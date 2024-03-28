const arr = [1,2,3,4,5,6,7,8];

const eveArr = [];
const oddArr = []

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        eveArr.push(arr[i]);
    }
    else{
        oddArr.push(arr[i]);
    }
}

console.log(eveArr);
console.log(oddArr);

