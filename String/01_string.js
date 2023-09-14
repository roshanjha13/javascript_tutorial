const name = "koushik";
const repoCount = 50;

console.log(`${name}${repoCount}`); //string interpolation

const gameName = new String("roshan-hc-com");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
//check which index character present
console.log(gameName.indexOf("h"));
// Returns the position of the first occurrence of a substring.
const newString = gameName.substring(0, 4);
//last value not include and orginal; str not changed
console.log(newString);

const anotherStr = gameName.slice(-8, 4);
//in slice you put - value for reverse,org str not changed
console.log(anotherStr);
console.log(gameName);

const newStr = " roshan ";
console.log(newStr.trim());
console.log(newStr);

const url = "https://roshan.com/hitesh%20jha";

url.replace("%20", "-");
console.log(url.replace("%20", "-"));
console.log(url.includes("%20"));

//convert into array based on -
console.log(gameName.split("-"));
