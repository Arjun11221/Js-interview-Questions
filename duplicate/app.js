const arr = [1,2,3,1,5,6,7,2];

let flag = false;

let duplicate = [];

for(let i = 0; i<arr.length-1; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            duplicate.push(arr[i]);
            flag = true;
            break;
        }
    }
    if(flag==true) break;
}

console.log(duplicate);

if(flag==true) console.log("Duplicate Present");
else console.log("Duplicate isn't Present");