"use strict";
/* 29. Favorite Fruit: Make a array of your favorite fruits, and then
       write a series of independent if statements that check for
       certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind
  of fruit is in your array. If the fruit is in your array, the if block
  should print a statement, such as You really like bananas! */
let favorite_fruits = ["Pineapple", "Apricot", "Kiwi"];
// Method : 1
if (favorite_fruits[0] === "Pineapple") {
    console.log("You really like pineapple.");
}
;
if (favorite_fruits[1] === "Apricot") {
    console.log("You really like apricot.");
}
;
if (favorite_fruits[2] === "Kiwi") {
    console.log("You really like kiwi.");
}
;
if (favorite_fruits[3] === "Apple") { // index[3] in array didn't exist
    console.log("You really like apple.");
}
;
// Method : 2
if (favorite_fruits.includes("Pineapple")) {
    console.log("You really like pineapple.");
}
;
if (favorite_fruits.includes("Apricot")) {
    console.log("You really like apricot.");
}
;
if (favorite_fruits.includes("Kiwi")) {
    console.log("You really like kiwi.");
}
;
if (favorite_fruits.includes("Apple")) {
    console.log("You really like apple.");
}
;
