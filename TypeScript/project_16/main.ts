/* 16. More Guests: You just found a bigger dinner table, so now 
       more space is available. Think of three more guests to invite 
       to dinner.

• Start with your program from Exercise 15. Add a print statement 
  to the end of your program informing people that you found a bigger 
  dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add 
  one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let guests : string[] = ["Kezaru", "Luffy", "Asta"];

// Method : 1

for(let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, we sincerely invite you to our dinner.`);
};

let newGuests : string = "Aizoki";

guests[0] = newGuests;

for(let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, we sincerely invite you to our dinner.`);
};

let oldGuest : string = "Kezaru";
console.log(`Dear ${oldGuest}, won't be able to join us at dinner.`);

console.log("Dear guests, we have found a bigger dinning table and we are inviting 3 more guests to join us at dinner.");

guests.unshift("Raizu");
guests.splice(2 , 0, 'Taesu');
guests.push(`Yuno`);

for(let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, you are sincerely invited to join us at dinner tonight.`);
};