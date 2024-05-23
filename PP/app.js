for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
      if(i===0||i===3){
            row += "* "; 
      }
      else{
           if(j===0||j===4) row += "* "; 
           else row += " "
      }
      
    }
    console.log(row); 
}
