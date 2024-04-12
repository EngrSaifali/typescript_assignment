"use strict";
/* 14. Guest List: If you could invite anyone, living or deceased,
       to dinner, who would you invite? Make a list that includes at least
       three people you’d like to invite to dinner. Then use your
       list to print a message to each person, inviting them to dinner. */
let people = ["Kezaru", "Luffy", "Asta"];
// Method : 1
console.log(`Dear ${people[0]}, you're invited to our dinner.`);
console.log(`Dear ${people[1]}, you're invited to our dinner.`);
console.log(`Dear ${people[2]}, you're invited to our dinner.`);
// Method : 2
/* for(let i = 0; i < people.length; i++) {
       console.log(`Dear ${people[i]}, you're invited to our dinner.`);
}; */
// Method : 3
/* people.forEach(person => console.log(`Dear ${people}, you're invited to our dinner.`)); */ 
