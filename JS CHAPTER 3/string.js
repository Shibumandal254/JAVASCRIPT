// strings
// original string is immutable
// let str = "Apna college";
// let str2 = "shradha";

// console.log("str", str2.length)
// console.log(str[1])

// Template literals
// let specialstring = `This is a template literal ${1+2+3}`; // in curlybracies amount will be calculate then it will print
// console.log(  specialstring);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`; // it is easier then the below one
// console.log(output);
// console.log("thecost of ", obj.item,"is",obj.price,"rupees");

// escape character
// let src ="apna \n hero"; // \n for next line
// let srcd = "\napna \t hero"; // \t for gap in the line
// console.log(src,srcd);


// string method
//upper case
let str = "apna jalwa";
str = str.toUpperCase();
console.log(str);

// lower case
let strd = "APNA JALWA";
strd = strd.toLowerCase();
console.log(strd);

//trim
 let local = "      heavy car    ";
 console.log(local.trim());

// slice 
let num = "012345678";
console.log(num.slice(1, 6)); // it wil not return 6 because 6 is instrensive which is end

// cortination (addition of two string)
let str1 = "apna";
let str2 = "jalwa";
let res = str1 + str2;
console.log(res);

//replace method
let str3  ="hello ";
console.log(str3.replace("h","y"));
// replaceAll use to replace all matching value

//character at method
let str4 = "Ilovejs";
str = str4.replace("I","j");
console.log(str4.charAt(3));
console.log(str);
