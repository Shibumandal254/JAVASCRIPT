console.log("Hello, JavaScript in VS Code!");
let Name = prompt("Enter your name:");
alert("Hello, " + name);
let firstName = "Alice";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Alice Johnson
let name = "Alice";  // String
const age = 25;      // Number
var isStudent = true; // Boolean
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
let num = 10;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 

fruits.push("Orange");  
fruits.pop();           
fruits.forEach(fruit => console.log(fruit));
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person.name); 
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
document.getElementById("demo").innerText = "Hello, JavaScript!";
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data Loaded"), 2000);
    });
}

async function getData() {
    let data = await fetchData();
    console.log(data);
}

getData();
