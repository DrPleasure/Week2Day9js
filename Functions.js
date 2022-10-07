/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 8));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}

console.log(crazySum(3, 5));
console.log(crazySum(9, 9));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function difference(x, y) {
  if (x < y) {
    return Math.abs(x - y);
  } else {
    return Math.abs(x - y) * 3;
  }
}

console.log(difference(5, 19));
console.log(difference(35, 19));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const low = 20;
const high = 101;

function boundary(n) {
  if ((n) => (low && n > high) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(25));
console.log(boundary(105));
console.log(boundary(401));
console.log(boundary(402131231));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str) {
  if (str.startsWith("Strive")) {
    console.log(str);
  } else {
    console.log("Strive" + str);
  }
}

console.log(strivify("Strive is a school"));
console.log(strivify("Zoo is a school"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n) {
  if (n % 3 === 0 && n % 7 === 0) {
    console.log(`${n} is a multiple of 3 and 7`);
  } else {
    console.log(`${n} is not a multiple of 3 and 7`);
  }
}

check3and7(21);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("what is happening"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log(["hello", "world"]);

console.log(["one", "two", "three"]);

function upperFirst(arr) {
  return arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}

console.log(upperFirst(["hello", "world"]));

console.log(upperFirst(["one", "two", "three"]));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const worder = "Giraf";

const cutString = worder.slice(1, -1);
console.log(cutString);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
  let arr1 = Array.from({ length: n }, () => Math.floor(Math.random() * 11));
  return arr1;
}

console.log(giveMeRandom(7));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
