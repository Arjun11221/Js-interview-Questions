const checkCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
  else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
    return true;
  }
  return false;
};
console.log(checkCase("s"));
console.log(checkCase("B"));
