var firstname = "Tanvir";
var lastname = "Kaur";
var age = 19;

var fullname = firstname + " "+ lastname;

age++;

var isadult = age>=18 ? "Adult" : "Minor";

console.log("Full Name: " + fullname);
console.log("Original Age: "+ (age-1));
console.log("Is Adult: "+ isadult);