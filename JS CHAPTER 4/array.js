// //array and 
// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); // property

// let heroes = ["ironman", "hulk", "thor", "spiderman"];
// console.log(heroes);
// console.log(typeof heroes);
// console.log(heroes[3]); // array indices
// console.log(heroes[3] = "hanuman"); // from this we can change array

//string is immutable
//array is mutable

// loops in array 

// let heroes = ["ironman", "hulk", "thor", "spiderman"];
// // for(let i = 0 ;i < heroes.length ; i++){
// //    console.log(heroes[i])
// // }

// // for of
// for( let hero of heroes){
//     console.log(hero);
// }

// let cities = ["delhi", "kolkata", "itanagar", "chennai"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// Array methods 
// push method add in end

// let foodItems = ["potato","apple","litchi","tomato"];
// foodItems.push("chips", "burger", "radish");
// console.log(foodItems);


// pop method delete from end
// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop(); 
// console.log(foodItems);
// console.log("deleted" ,deletedItem)

// let marks = [86, 46, 75, 34];
// console.log(foodItems);
// console.log(marks.toString());
// console.log(foodItems.toString()); // toString (for single string)
// console.log(foodItems);
// console.log(marks);


// concat (To join Multiple Array)
// let marvel_Heroes = ["thor", "Spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "balveer"]; 
// let heroes = marvel_Heroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);


// unshift method like push method add first thing in item
// let marvelHeroes = ["thor", "Spiderman", "ironman"];
// marvelHeroes.unshift("antman")
// console.log(marvelHeroes);


// shift method like pop method (delete first one from item)
// let marvelHeroes = ["thor", "Spiderman", "ironman"];
// marvelHeroes.shift();
// console.log(marvelHeroes);


// // slice method
// let marvel_Heroes = ["thor", "spiderman", "ironman", "antman"];
// console.log(marvel_Heroes);
// console.log(marvel_Heroes.slice(1, 3));


// splice method  (add,remove,replace)
let arr = [1, 2, 3, 4, 5, 6]; 
// add element
arr.splice(2,1,0)
console.log(arr);

// delete elment
arr.splice(4,1);
console.log(arr);

// replace element
arr.splice(4,1,7);
console.log(arr);

