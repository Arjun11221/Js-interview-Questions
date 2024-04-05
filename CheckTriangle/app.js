
const checkTriangle = (a,b,c)=>{
    if(a===b && b===c) console.log("Equilateral Triangel");
    else if(a===b || b===c || c===a) console.log("Isoscale Triangle");
    else console.log("Scalene Triangle");

}

checkTriangle(2,1,3);