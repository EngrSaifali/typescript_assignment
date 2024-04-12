"use strict";
/* 17. Shrinking Guest List: You just found out that your new dinner
       table won’t arrive in time for the dinner, and you have space
       for only two guests.

• Start with your program from Exercise 16. Add a new line that prints
  a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain
  in your list. Each time you pop a name from your list, print a message
  to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting
  them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
  Print your list to make sure you actually have an empty list at the end
  of your program. */
let highGuests = ["Kezaru", "Luffy", "Asta"];
for (let i = 0; i < highGuests.length; i++) {
    console.log(`Dear ${highGuests[i]}, we sincerely invite you to our dinner.`);
}
;
let HighNewGuests = "Aizoki";
highGuests[0] = HighNewGuests;
for (let i = 0; i < highGuests.length; i++) {
    console.log(`Dear ${highGuests[i]}, we sincerely invite you to our dinner.`);
}
;
let HighOldGuest = "Kezaru";
console.log(`Dear ${HighOldGuest}, won't be able to join us at dinner.`);
console.log("Dear guests, we have found a bigger dinning table and we are inviting 3 more guests to join us at dinner.");
highGuests.unshift("Raizu");
highGuests.splice(2, 0, 'Taesu');
highGuests.push(`Yuno`);
for (let i = 0; i < highGuests.length; i++) {
    console.log(`Dear ${highGuests[i]}, you are sincerely invited to join us at dinner tonight.`);
}
;
console.log("Sorry, the table won't be arriving at the time of dinner, so we are only able to arrange 2 seats.");
// Method : 1
// highGuests.pop();
// console.log(`${highGuests[6]}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
// highGuests.pop();
// console.log(`${highGuests[5]}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
// highGuests.pop();
// console.log(`${highGuests[4]}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
// highGuests.pop();
// console.log(`${highGuests[3]}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
// highGuests.pop();
// console.log(`${highGuests[2]}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
// console.log(`${highGuests[1]}, you are still invited, and we look forward to meeting you at dinner.`);
// console.log(`${highGuests[0]}, you are still invited, and we look forward to meeting you at dinner.`);
// highGuests.pop();
// highGuests.pop();
// console.log(highGuests);
// Method : 2
while (highGuests.length > 2) {
    let remove_Guest = highGuests.pop();
    console.log(`${remove_Guest}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
}
;
for (let i = 0; i < highGuests.length; i++) {
    console.log(`${highGuests[i]}, you are still invited, and we look forward to meeting you at dinner.`);
}
;
highGuests.splice(0, 2);
console.log(highGuests);
