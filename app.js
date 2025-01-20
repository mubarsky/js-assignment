let assignmentOne = "mubby";
console.log(assignmentOne.toUpperCase());
let assignmentTwo = parseInt("42", 10);
console.log(assignmentTwo);
let assignmentThree = ["Canada", "Nigeria", "United state"];
let pushCountry = assignmentThree.push("Ghana");
console.log(assignmentThree);

/*2*/
let greeting = "hello!";
console.log(typeof greeting);
let age = 20;
console.log(typeof age);
let isStudent = true;
console.log(typeof isStudent);

/*3*/
let p = 4;
let a = 2;
let addition = p + a;
console.log(addition);
let substraction = p - a;
console.log(substraction);
let multipliplication = p * a;
console.log(multipliplication);
let division = p / a;
console.log(division);

let h = "12345678";
let g = "123456";
console.log(h >= g);

let isPlaying = "true";
let isNotPlaying = "false";
let checkBoolean = isPlaying && isNotPlaying;
console.log(checkBoolean);

/*4*/
let heightInMeters = 5;
let centimeters = heightInMeters * 100;
console.log(`${heightInMeters} meters is equal to ${centimeters}centimeters`);

let favFood = "pounded yam ";
let favSoup = "Egusi";
console.log(`My favorite food is ${favFood}and ${favSoup}`);

/*5*/
const birthYear = 1999;
let currentYear = 2025;
let myAge = currentYear - birthYear;
console.log(myAge);

/*6*/

let firstName = "Mubarak ";
let lastName = "Ismail";
let fullName = firstName + lastName;
console.log(`Good day my name is ${fullName}`);

/*7*/

let score1 = 50;
let score2 = 50;
let score3 = 50;
let addingScore = score1 + score2 + score3;
let averageScore = addingScore/3;
console.log(`The average score is ${averageScore} Averagescore`);

/**8 */
let totalminutes = 70 ;
let hour = 60;
let minushour = totalminutes % hour ;
console.log( `1 hour ${minushour} minutes`);


/**9 */
let itemPrice = 80;
let taxRate = 0.08 ;
itemPrice = itemPrice + taxRate ;
console.log(itemPrice);

/**13 */
currentHour = 11;
if (currentHour > 12) {
  console.log("good morning");
}else if (currentHour <=18) {
  console.log("good afternoon");
} else {
console.log("good evening");
}