// // practice
// let marks = [85, 75, 35, 33, 23];

// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class= ${avg}`);


// //  for of loop 
// let items = [360, 350, 450, 300, 299];

// let i = 0;
// for( let value of items){
//     console.log(`value at index ${i}=${value}`);
//     let offer = value / 10;
//     items [i]= items[i] - offer;
//     console.log(`value after offer${items[i]}`);
//     i++;   
// }


// for loop
// let items = [360, 350, 450, 300, 299];
//  for ( let i = 0; i < items.length; i++){
//     let offer = items[i]/ 10;
//     items[i] -= offer;
//  }
//  console.log(items);


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);

companies.splice(2, 1, "Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
