const marverHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "batman", "flash"];

// marverHeros.push(dcHeros);
// console.log(marverHeros[3][1]);

// const conc = marverHeros.concat(dcHeros);
// console.log(conc);

// const all_new_heros = [...marverHeros, ...dcHeros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Roshan"));
//convert string to array
console.log(Array.from("Roshan"));
console.log(Array.from({ name: "roshan" })); // give empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
