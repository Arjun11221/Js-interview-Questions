const camelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((item, index) => {
      if (index === 0) {
        return item.toLowerCase();
      } else {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
      }
    }).join("");
};

console.log(camelCase("Hello World Arjun"));
