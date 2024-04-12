"use strict";
/* 3. Name Cases: Store a person’s name in a variable, and then print
      that person’s name in lowercase, uppercase, and titlecase. */
let PersonName = "Saif Ali";
// Name in Lower Case
let lowerCase = PersonName.toLowerCase();
console.log(lowerCase);
// Name in Upper Case
let upperCase = PersonName.toUpperCase();
console.log(upperCase);
// Name in Title Case
// Method 1:
let titleCase1 = PersonName.replace(/\b\w/g, c => c.toUpperCase());
console.log(titleCase1);
// Method 2:
let letters = PersonName.split(" ");
let titleCase2 = "";
for (let i = 0; i < letters.length; i++) {
    titleCase2 += letters[i].charAt(0).toUpperCase() + letters[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCase2);
