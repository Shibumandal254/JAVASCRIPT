// practice 1
// for( let i=1; i<=100; i++){
//     console.log("i= ", i)
// }

// for( let i=1; i<=100; i++){
//     if (i%2 === 0){
//         console.log("i = ", i);
//     }
// }

// practice 2
let gameNum = 1;
let userNum = prompt("Guess the game number:");

while(userNum != gameNum){
    userNum = prompt("You enter the wrong number . guess the correct number");
}

console.log("congratulation, you guess the correct the number ");

// let fullname = prompt("enter your fullname without spaces"); 

// let username = "@" + fullname + fullname.length;
// console.log(username);
