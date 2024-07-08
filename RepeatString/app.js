const repeatingString = (str, num) => {
  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);

  // console.log(str.repeat(num));
};

repeatingString("3", 10);
