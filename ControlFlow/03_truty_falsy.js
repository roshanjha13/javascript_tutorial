// const userEmail = "roshan@gmail.com";
const userEmail = [];

// check array empty or not => arr.length === 0
if (userEmail) {
  console.log("Got the user email");
} else {
  console.log("Don't have user email");
}

// falsy:0,-0,false,null,undefined,BigInt 0n

//truthy: "0",'false'," ",[],{},fn(){}

//check obj is empty or not

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

//nullish coalescing operator (??): :- work only null and undefined

let val1;
let val2;

val1 = 5 ?? 10;
val2 = null ?? 10;
// in val2 : if val is null then assign null ,if value is present then assign real value

console.log(val1);
console.log(val2);
