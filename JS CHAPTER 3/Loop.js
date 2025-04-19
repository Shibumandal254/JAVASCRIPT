// for loop
//print 1 to 10

/*for(let count = 1; count <= 10; count++){
    console.log("legacy"); // 10 execute
}*/

//calcultae sum of 1 to 5
/*let sum = 0;
for (let i = 1; i<= 5; i++){
 sum = sum + i;  // sum = 1+2+3+4+5
}
console.log("sum = ", sum);
console.log("loop has been ended");

for( let i = 1; i<= 5; i++){
    console.log("i= ", i);
}*/
// never create infinite loop in a program it can crash your program or website 


//while loop
/*let i = 1;
while(i<=5){
    console.log("i =",i)
    i++;
}*/

// do-while loop
// let i = 1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i <= 5 );


// for-of loop
// let str = "mobilelegend";

// for ( let i of str ){ // iterator --> characters
//     console.log("i=",i)
// }

// let str = "mobilelegend";

// let size = 0;
// for (let i of str ){ // i is value (val)
//    console.log("i=",i)
//    size++;
// }

// console.log("string size =",size);

// for in loop
let student = {
    Name:"Rahul kumar",
    age:20,
    cgpa:7.5,
    isPass: true,
};
for (let key in student){
    console.log("key=",key,"value=", student[key]);
}
