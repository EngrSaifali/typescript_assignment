/* 19. Dinner Guests: Working with one of the programs from Exercises 14 
       through 18, print a message indicating the number of people you 
       are inviting to dinner. */

let exGuests : string[] = ["Kezaru", "Luffy", "Asta"];
  
// for(let i = 0; i < exGuests.length; i++) {
//   console.log(`Dear ${exGuests[i]}, we sincerely invite you to our dinner.`);
// };
  
let exNewGuests : string = "Aizoki";
exGuests[0] = exNewGuests;
  
// for(let i = 0; i < exGuests.length; i++) {
//   console.log(`Dear ${exGuests[i]}, we sincerely invite you to our dinner.`);
// };
  
let exOldGuest : string = "Kezaru";
// console.log(`Dear ${exOldGuest}, won't be able to join us at dinner.`);
  
// console.log("Dear guests, we have found a bigger dinning table and we are inviting 3 more guests to join us at dinner.");
  
exGuests.unshift("Raizu");
exGuests.splice(2 , 0, 'Taesu');
exGuests.push(`Yuno`);
  
// for(let i = 0; i < exGuests.length; i++) {
//   console.log(`Dear ${exGuests[i]}, you are sincerely invited to join us at dinner tonight.`);
// };

// console.log("Sorry, the table won't be arriving at the time of dinner, so we are only able to arrange 2 seats.");

while(exGuests.length > 2) {
       let exRemove_Guest = exGuests.pop();
       // console.log(`${exRemove_Guest}, I apologize that we weren't able to arrange a dinner table this time, but I promise you'll be invited next time.`);
};
     
// for(let i = 0; i < exGuests.length; i++) {
//        console.log(`${exGuests[i]}, you are still invited, and we look forward to meeting you at dinner.`);
// };
     
exGuests.splice(0, 2);
console.log(exGuests);

console.log(`Total number of guests invited for dinner are : ${exGuests.length}`);