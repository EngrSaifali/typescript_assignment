"use strict";
/* 24. More Conditional Tests: You don’t have to limit the number of
       tests you create to 10. If you want to try more comparisons,
       write more tests. Have at least one True and one False result
       for each of the following:

• Tests for equality and inequality with strings.
• Tests using the lower case function.
• Numerical tests involving equality and inequality, greater than and
  less than, greater than or equal to, and less than or equal to.
• Tests using "and" and "or" operators.
• Test whether an item is in a array.
• Test whether an item is not in a array. */
let str_1 = "Good";
let str_2 = "Bad";
console.log("str_1 == str_2 ? I predict False");
console.log(str_1 == str_2);
console.log("str_1 != str_2 ? I predict True");
console.log(str_1 != str_2);
console.log("str_1.toLowerCase() == str_2 ? I predict False");
console.log(str_1.toLowerCase() == str_2);
console.log("str_1 != str_2.toLowerCase() ? I predict True");
console.log(str_1 != str_2.toLowerCase());
let num_1 = 5;
let num_2 = 10;
console.log("num_1 == num2_2 ? I predict False");
console.log(num_1 == num_2);
console.log("num_1 != num2_2 ? I predict True");
console.log(num_1 != num_2);
console.log("num_1 > num2_2 ? I predict False");
console.log(num_1 > num_2);
console.log("num_1 < num2_2 ? I predict True");
console.log(num_1 < num_2);
console.log("num_1 >= num2_2 ? I predict False");
console.log(num_1 >= num_2);
console.log("num_1 <= num2_2 ? I predict True");
console.log(num_1 <= num_2);
// If both of the condition is true, it will return true.
console.log("num_1 !== num_2 && num_1 === 5 ? I predict True"); // True && True
console.log(num_1 !== num_2 && num_1 === 5);
// If one of the condition is false, it will return true.
console.log("num_1 !== num_2 && num_1 !== 5 ? I predict False"); // True && False
console.log(num_1 !== num_2 && num_1 !== 5);
// If any one of the conditions is true, it will return true.
console.log("10 === num_2 || num1 > 10 ? I predict True"); // True || False
console.log(10 === num_2 || num_1 > 10);
// Both conditions should be false, then it will return false.
console.log("10 !== num_2 || num_1 > 10 ? I predict False"); // False || False
console.log(10 !== num_2 || num_1 > 10);
let items = ["Apricot", "Pineapple", "Mango"];
console.log("I predict True");
console.log(items.includes("Apricot"));
//console.log(!items.includes("Grapes"));   (Method : 2) !variable.includes("") mean not in variable.
console.log("I predict False");
console.log(items.includes("Orange"));
